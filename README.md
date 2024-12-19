# AIRA Project Documentation

Welcome to the **AIRA** repository! AIRA is a mental health platform for early detection, providing a professional assistant for empathetic interactions. This project was created in the context of the **EMBS challenge of TSYP12**, showcasing innovation in mental health technology by combining sentiment analysis, contextual memory, and tailored responses.

---

## Front-end Setup

The front-end of the project is built using **Next.js**, a powerful React framework.

### Setup Instructions
1. Navigate to the front-end directory:
   ```bash
   cd AIRA/front-end/src

  2. Open a terminal or PowerShell and install dependencies:
     ```bash
     npm install
     ```
  3. Start the development server:
     ```bash
     npm run dev
     ```
  4. The front-end will run on `http://localhost:3000`.

### Back-end
- **Description**: FastAPI-based backend managing chatbot responses, sentiment analysis, and contextual memory.
- **Path**: `AIRA/back-end/`
- **Setup Instructions**:
  1. Navigate to `AIRA/back-end/`.
  2. Install required dependencies listed in `requirements.txt`:
     ```bash
     pip install -r requirements.txt
     ```
  3. Run the FastAPI server:
     ```bash
     uvicorn Chatbot:app --reload
     ```
  4. The back-end will run on `http://localhost:8000`.

---

## Technologies Used

### Front-end
- **Next.JS**: Framework for building user interfaces.
- **Material-UI**: Styling components for a modern look and feel.
- **Framer Motion**: Animations for smooth and dynamic interactions.
- **Other react libraries and UI kits**: For enhancing UI/UX.

### Back-end
- **FastAPI**: Lightweight and fast web framework for building APIs.
- **VaderSentiment**: Sentiment analysis for text classification.
- **Hugging Face Transformers**: Pre-trained emotion classification models.
- **OpenRouter.ai**: API for generating chatbot responses using advanced language models.
- **Pydantic**: Data validation and parsing.
- **CORS Middleware**: Enables secure communication between front-end and back-end.

---

## Key Features

### Front-end
- **Chat Interface**: A responsive and user-friendly chat UI for seamless interaction.
- **Real-time Updates**: Smooth animations and instant feedback.

### Back-end
- **Sentiment Analysis**: Combines VADER and a Hugging Face transformer model for in-depth sentiment evaluation.
- **Distress Score**: Calculates a normalized distress score based on emotion trends.
- **Contextual Memory**: Retains past conversations and trends for personalized assistance.
- **Dynamic Context Generation**: Adjusts chatbot responses based on user sentiment and emotional state.

---

## Dependencies

### Front-end
- `react`
- `@mui/material`
- `framer-motion`
- `axios`

### Back-end
- `fastapi`
- `uvicorn`
- `vaderSentiment`
- `transformers`
- `requests`
- `pydantic`

To install all required back-end dependencies, run:
```bash
pip install -r requirements.txt
```

---

## API Endpoints

### POST `/chat`
- **Description**: Processes user input, performs sentiment analysis, and returns chatbot responses.
- **Request Body**:
  ```json
  {
    "user_input": "I feel so anxious and unsure about my future."
  }
  ```
- **Response**:
  ```json
  Sentiment Analysis: {
  "vader_sentiment": "negative",
  "dominant_emotion": "fear",
  "emotion_scores": [
    {
      "label": "anger",
      "score": 0.0006533358246088028
    },
    {
      "label": "disgust",
      "score": 0.0005526913446374238
    },
    {
      "label": "fear",
      "score": 0.9935412406921387
    },
    {
      "label": "joy",
      "score": 0.0011433031177148223
    },
    {
      "label": "neutral",
      "score": 0.0014599639689549804
    },
    {
      "label": "sadness",
      "score": 0.0015837876126170158
    },
    {
      "label": "surprise",
      "score": 0.001065543619915843
    }
     Distress Score: 0.6988701166323154
     Conversation History: [
  {
    "user": "I feel so anxious and unsure about my future.",
    "assistant": ""
  }

  ```

---

## Running the Application

1. Start the back-end server:
   ```bash
   uvicorn Chatbot:app --reload
   ```
2. Start the front-end development server:
   ```bash
   npm run dev
   ```
3. Access the application on `http://localhost:3000`.

---

## Contribution

1. Fork the repository.
2. Clone the repository to your local machine.
3. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
4. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
5. Push your branch:
   ```bash
   git push origin feature-name
   ```
6. Open a pull request.

---
## Jupyter Notebooks for Development

- **[Chatbot Development (LLM + NLU)](https://colab.research.google.com/drive/1yWH0Ii8aB6OPo2U1s0eompJaoNO_s28m?usp=sharing)**: This notebook allows for testing both the LLM and NLU models and integrates their functionalities.
- **[Training NLU for Combined Use with LLM](https://colab.research.google.com/drive/1FFyJ6iCYoXKxHXBnO22YABY2CazIwYx0?usp=sharing)**: A dedicated notebook for training the NLU model, designed for combined use with the LLM model.

For any questions or issues, feel free to open an issue or contact the maintainers.


## License
This project is licensed under the MIT License.

---

For any questions or issues, feel free to open an issue or contact the maintainers.

