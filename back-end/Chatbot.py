from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import json
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from transformers import pipeline
import requests
import datetime
from collections import defaultdict
import os
from mangum import Mangum  # Import Mangum to make it serverless

app = FastAPI()
api_key = os.getenv("AIRA_EMBS")

# Add CORS middleware to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with your frontend URL for better security
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Initialize sentiment and emotion models
analyzer = SentimentIntensityAnalyzer()
emotion_model = pipeline("text-classification", model="TheAlchemist411/AIRA", return_all_scores=True)

# Initialize persistent memory for context and sentiment trends
user_memory = {
    "context_history": [],
    "sentiment_trend": defaultdict(list),
    "conversation_history": []  # Stores past prompts and responses
}

# Input schema
class ChatRequest(BaseModel):
    user_input: str

@app.post("/chat")
async def get_chat_response(chat_request: ChatRequest):
    user_input = chat_request.user_input

    # Add user's input to the conversation history
    user_memory["conversation_history"].append({"role": "user", "content": user_input})
    distress = 0
    # Sentiment and emotion analysis
    sentiment_data = analyze_sentiment(user_input)
    distress_score = calculate_distress_score(sentiment_data["emotion_scores"])

    # Create dynamic context based on sentiment data and distress score
    context = create_context(sentiment_data, distress_score)

    # Call OpenRouter API with updated context
    response = requests.post(
        url="https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": f"AIRA_EMBS {api_key}",
        },
        data=json.dumps({
            "model": "google/gemini-2.0-flash-exp:free",
            "messages": [{"role": "system", "content": context}] + user_memory["conversation_history"]
        })
    )

    # Extract assistant's response
    assistant_response = response.json().get("choices", [{}])[0].get("message", {}).get("content", "")

    # Add bot's response to the conversation history
    user_memory["conversation_history"].append({"role": "assistant", "content": assistant_response})

    return {
        "response": assistant_response,
        "sentiment_analysis": sentiment_data,
        "distress_score": distress_score,
        "conversation_history": user_memory["conversation_history"]
    }

def analyze_sentiment(user_input):
    vader_scores = analyzer.polarity_scores(user_input)
    vader_sentiment = "negative" if vader_scores['compound'] < -0.1 else "positive" if vader_scores['compound'] > 0.1 else "neutral"

    emotion_scores = emotion_model(user_input)[0]
    dominant_emotion = max(emotion_scores, key=lambda x: x['score'])['label']

    return {
        "vader_sentiment": vader_sentiment,
        "dominant_emotion": dominant_emotion,
        "emotion_scores": emotion_scores,
    }

def calculate_distress_score(emotion_scores):
    weights = {
        "sadness": 0.5,
        "anger": 0.4,
        "fear": 0.4,
        "surprise": -0.2,
        "joy": -0.5,
        "disgust": 0.1
    }
    raw_score = sum(weights.get(emotion["label"], 0) * emotion["score"] for emotion in emotion_scores)
    return max(0, min(1, raw_score))

def create_context(sentiment_data, distress_score):
    return (
        f"You are AIRA, a professional empathetic mental health assistant. You read and understand the emotions of the user. "
        f"You retain memory of past conversations. The user feels {sentiment_data['vader_sentiment']} "
        f"with dominant emotion {sentiment_data['dominant_emotion']}. "
        f"The distress score is {distress_score:.2f}, suggesting that you provide empathetic and tailored support. "
        "Your first task is to ask the user the following questions and only these questions until you are satisfied with their answers. "
        "If you feel you are drifting off-topic, ask the user to please respond and let you stick to the provided questions. "
        "\n\nThe assessment questions are:\n"
        "1. How have you been feeling lately?\n"
        "2. Have you been experiencing any stress or anxiety?\n"
        "3. Do you feel like you have enough support in your life?\n"
        "4. How would you rate your overall happiness on a scale from 1 to 10?\n"
        "5. Have you been feeling more tired than usual?\n"
        "6. Do you find it difficult to focus or concentrate?\n"
        "7. Are you experiencing any feelings of guilt or self-blame?\n"
        "8. Do you ever have thoughts of hurting yourself or others?\n\n"
        "Please only ask these questions and wait for the user's response before proceeding to the next question."
        "After that, you can assess the mental health of the user based on the answers to the questions and provide the necessary support."
        "If you feel the user is severely mentally damaged, recommend them to consult a mental health professional immediately."
        "You also have access to the user's heart rate data from the dashboard of the website giving random realistic data. "
        "Additionally, you have access to the sleep tracking data of the user from the dashboard of the website, where you notice they only sleep between 1 to 6 hours the entire week, indicating poor sleep quality."
    )

# Handler for AWS Lambda to work with FastAPI
handler = Mangum(app)
