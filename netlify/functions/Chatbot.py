import requests
import json
import os

def handler(event, context):
    try:
        # Extract user input from request body
        body = json.loads(event['body'])
        user_input = body.get('user_input')

        if not user_input:
            return {
                'statusCode': 400,
                'body': json.dumps({'error': 'User input is required'})
            }

        # Define OpenRouter API details
        api_url = "https://openrouter.ai/api/v1/chat/completions"
        headers = {
            "Authorization": f"AIRA_EMBS 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}",
        }

        # Prepare the request payload
        data = json.dumps({
            "model": "google/gemini-2.0-flash-exp:free",  # Model (optional)
            "messages": [{"role": "user", "content": user_input}]
        })

        # Send request to OpenRouter API
        response = requests.post(api_url, headers=headers, data=data)

        if response.status_code != 200:
            return {
                'statusCode': response.status_code,
                'body': json.dumps({'error': 'Error from OpenRouter API', 'details': response.text})
            }

        # Get the chatbot's response from the OpenRouter API
        chatbot_response = response.json().get("choices", [{}])[0].get("message", {}).get("content", "")

        # Return the chatbot response to the frontend
        return {
            'statusCode': 200,
            'body': json.dumps({'response': chatbot_response})
        }

    except Exception as e:
        # Handle errors in the function
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }
