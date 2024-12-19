// Import Mangum to adapt the handler to AWS Lambda
const { Handler } = require('@vendia/serverless-express');
const fetch = require('node-fetch');

// AWS Lambda handler function
const handler = async (event, context) => {
  try {
    // Parse the incoming request body (assuming it's JSON)
    const { user_input } = JSON.parse(event.body);

    // Get bot's response
    const botResponse = await getBotResponse(user_input);

    // Return response back to frontend
    return {
      statusCode: 200,
      body: JSON.stringify({ response: botResponse }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};

// Example function to get bot response (replace with your actual logic)
async function getBotResponse(userInput) {
  // This can be any model you are using, such as OpenAI API, Hugging Face, etc.
  // Example using a placeholder response
  return `You said: ${userInput}. How can I help you further?`;
}

// Export the handler as an AWS Lambda function
module.exports.handler = Handler(handler);
