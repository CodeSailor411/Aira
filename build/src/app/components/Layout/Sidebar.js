"use client";

import React from "react";
import { Box, List, ListItem, ListItemText, Typography, Button } from "@mui/material";
import { FaHeartbeat, FaLightbulb, FaCalendarCheck, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link"; // To handle the home button routing

export default function Sidebar({ setActiveFeature }) {
  const features = [
    { title: "Mood Tracking & Analysis", icon: <FaHeartbeat />, key: "moodTracking" },
    { title: "Interactive Mental Health Advisor", icon: <FaLightbulb />, key: "mentalHealthAdvisor" },
    { title: "Long-Term Guided Programs", icon: <FaCalendarCheck />, key: "calendar" },
  ];

  return (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        background: "#1e3a8a", // Sidebar background color with a professional blue tone
        color: "#fff",
        padding: 2,
        boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.1)", // Shadow for depth
        borderRight: "2px solid #e0e0e0", // Subtle border for structure
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // Make sure the sidebar content starts from the top
        overflowY: "auto", // Make sidebar scrollable if needed
      }}
    >
      {/* Home Button */}
      <Link href="/" passHref>
        <Button
          variant="contained"
          sx={{
            background: "#1ae5be",
            color: "#fff",
            marginBottom: 3,
            borderRadius: "8px",
            textTransform: "none",
            "&:hover": { backgroundColor: "#1ae5be" },
          }}
        >
          <FaHome style={{ marginRight: 8 }} />
          Home
        </Button>
      </Link>

      {/* Sidebar Title */}
      <Typography
        variant="h5"
        sx={{
          marginBottom: 2,
          fontWeight: "bold",
          textAlign: "center",
          color: "#fff",
        }}
      >
        Features
      </Typography>

      {/* List of Features */}
      <List sx={{ flexGrow: 1 }}>
        {features.map((feature) => (
          <motion.div
            key={feature.key}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(26, 229, 190, 0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <ListItem
              component="div"
              onClick={() => setActiveFeature(feature.key)}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                padding: "14px",
                borderRadius: "12px",
                cursor: "pointer",
                "&:hover": {
                  background: "rgba(26, 229, 190, 0.15)", // More subtle hover effect
                  transition: "background 0.3s ease", // Smooth transition
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                }}
              >
                <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                  {feature.icon}
                </motion.div>
              </Box>
              <ListItemText
                primary={feature.title}
                sx={{
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#fff", // Light text for contrast
                  "& .MuiTypography-root": {
                    fontWeight: "500", // Bold text for titles
                  },
                }}
              />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Box>
  );
}
