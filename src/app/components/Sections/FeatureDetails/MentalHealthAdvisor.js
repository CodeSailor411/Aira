"use client";

import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

// Make sure the API key is correctly defined
const api_key = "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";

const MentalHealthAdvisor = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);  // Store conversation history

  // Function to handle sending a message
  const sendMessage = async () => {
    if (userMessage.trim()) {
      // Add user's message to the chat and conversation history
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userMessage, sender: "user" },
      ]);
      const updatedHistory = [
        ...conversationHistory,
        { role: "user", content: userMessage },
      ];
      setConversationHistory(updatedHistory);

      // Clear the input field immediately after adding the message
      setUserMessage("");

      // Call backend to get bot response
      setLoading(true);
      const botResponse = await fetchBotResponse(userMessage, updatedHistory);
      setLoading(false);

      // Add bot's response to the chat and conversation history
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse.response, sender: "bot" },
      ]);
      setConversationHistory((prevHistory) => [
        ...prevHistory,
        { role: "assistant", content: botResponse.response },
      ]);
    }
  };

  // Fetch bot response from the new API
  const fetchBotResponse = async (userInput, conversationHistory) => {
    try {
      // Example sentiment and distress score for context generation (replace with actual logic)
      const sentimentData = { vader_sentiment: "neutral", dominant_emotion: "calm" };
      const distressScore = 2.5;  // Example distress score

      const context = createContext(sentimentData, distressScore);

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `AIRA_EMBS ${api_key}`, 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "google/gemini-2.0-flash-exp:free",
          messages: [{ role: "system", content: context }, ...conversationHistory]
        })
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response from the chatbot API");
      }

      const data = await response.json();
      const assistantResponse = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't get a valid response.";

      return {
        response: assistantResponse,
        conversation_history: data.conversation_history || []
      };
    } catch (error) {
      console.error("Error fetching bot response:", error);
      return { response: "I'm sorry, I couldn't connect to the server." };
    }
  };

  // Generate context based on sentiment and distress score
  const createContext = (sentimentData, distressScore) => {
    return (
      `You are AIRA, a professional empathetic mental health assistant. You read and understand the emotions of the user. 
      Your first task is to ask the user the following questions and only these questions until you are satisfied with their answers. 
      If you feel you are drifting off-topic, ask the user to please respond and let you stick to the provided questions.

      The assessment questions are:
      1. How have you been feeling lately?
      2. Have you been experiencing any stress or anxiety?
      3. Do you feel like you have enough support in your life?
      4. How would you rate your overall happiness on a scale from 1 to 10?
      5. Have you been feeling more tired than usual?
      6. Do you find it difficult to focus or concentrate?
      7. Are you experiencing any feelings of guilt or self-blame?
      8. Do you ever have thoughts of hurting yourself or others?

      Please only ask these questions and wait for the user's response before proceeding to the next question. 
      After that, you can assess the mental health of the user based on the answers to the questions and provide the necessary support. 
      If you feel the user is severely mentally damaged, recommend them to consult a mental health professional immediately.`
    );
  };

  // Handle Enter key press to send message
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        maxWidth: "800px",
        margin: "auto",
        padding: 4,
        background: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        border: "2px solid #f1f5f9",
        marginTop: "40px",
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          color: "#1e3a8a",
          fontWeight: "bold",
          marginBottom: 3,
        }}
      >
        Mental Health Advisor
      </Typography>

      {/* Chat messages */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          padding: 3,
          backgroundColor: "#f9f9f9",
          borderRadius: "12px",
          boxShadow: "inset 0 4px 6px rgba(0, 0, 0, 0.1)",
          marginBottom: 2,
          height: "400px",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#1ae5be",
            borderRadius: "4px",
          },
        }}
      >
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              flexDirection: message.sender === "user" ? "row-reverse" : "row",
              marginBottom: "16px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", marginRight: "8px" }}>
              {message.sender === "bot" && <FaRobot size={30} color="#1ae5be" />}
            </Box>
            <Paper
              sx={{
                padding: 2,
                borderRadius: "16px",
                backgroundColor: message.sender === "user" ? "#1ae5be" : "#192056",
                color: message.sender === "user" ? "#fff" : "#ddd",
                maxWidth: "75%",
                wordBreak: "break-word",
              }}
            >
              {/* Render message text with ReactMarkdown */}
              <ReactMarkdown>{message.text}</ReactMarkdown>
            </Paper>
          </motion.div>
        ))}
        {loading && <Typography variant="body2">AIRA is typing...</Typography>}
      </Box>

      {/* User input area */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          label="Type your message"
          variant="outlined"
          fullWidth
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}  // Set the user message
          onKeyDown={handleKeyPress} // Listen for Enter key press
          sx={{
            borderRadius: "12px",
            backgroundColor: "#fff",
          }}
        />
        <motion.div whileTap={{ scale: 0.95 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ height: "100%" }}
            onClick={sendMessage}
          >
            Send
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default MentalHealthAdvisor;
