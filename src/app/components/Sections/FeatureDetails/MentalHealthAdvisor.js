"use client";

import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

const MentalHealthAdvisor = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to handle sending a message
  const sendMessage = async () => {
    if (userMessage.trim()) {
      // Add user's message to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userMessage, sender: "user" },
      ]);

      // Clear the input field immediately after adding the message
      setUserMessage("");

      // Call backend to get bot response
      setLoading(true);
      const botResponse = await fetchBotResponse(userMessage);
      setLoading(false);

      // Add bot's response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: "bot" },
      ]);
    }
  };

  // Fetch bot response from backend
  const fetchBotResponse = async (userInput) => {
    try {
      const response = await fetch(
        "https://airaapp.netlify.app/.netlify/functions/Chatbot",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_input: userInput }),
        }
      );
      if (!response.ok) {
        throw new Error("Server error");
      }
      const data = await response.json();
      return data.response; // Return the assistant's response
    } catch (error) {
      console.error("Error fetching bot response:", error);
      return "I'm sorry, I couldn't connect to the server.";
    }
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
              {message.sender === "bot" && (
                <FaRobot size={30} color="#1ae5be" />
              )}
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
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyDown={handleKeyPress} // Listen for Enter key press
          sx={{
            borderRadius: "12px",
            backgroundColor: "#fff",
          }}
        />
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="contained"
            onClick={sendMessage}
            sx={{
              backgroundColor: "#1ae5be",
              color: "#fff",
              borderRadius: "12px",
              padding: "12px 16px",
              "&:hover": {
                backgroundColor: "#0e8e77",
              },
            }}
          >
            Send
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default MentalHealthAdvisor;
