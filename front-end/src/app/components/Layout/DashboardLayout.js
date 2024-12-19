"use client";

import React, { useState } from "react";
import { Box, Typography, Paper, List, ListItem, ListItemText, Button } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link"; // For home navigation
import { FaHeartbeat, FaLightbulb, FaCalendarCheck, FaHome } from "react-icons/fa"; // Icons for the sidebar
import MoodTracking from "../Sections/FeatureDetails/MoodTracking";
import MentalHealthAdvisor from "../Sections/FeatureDetails/MentalHealthAdvisor";
import Calendar from "../Sections/FeatureDetails/Calendar"; 

const DashboardLayout = () => {
  const [activeFeature, setActiveFeature] = useState("moodTracking");

  // Render the selected feature based on the state of activeFeature
  const renderFeature = () => {
    switch (activeFeature) {
      case "mentalHealthAdvisor":
        return <MentalHealthAdvisor />;
      case "calendar":
        return <Calendar />;
      case "moodTracking":
      default:
        return <MoodTracking />;
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: { xs: "column", md: "row" } }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: { xs: "100%", md: "250px" },
          background: "#1e3a8a",
          color: "#fff",
          padding: 2,
          boxShadow: "0px 2px 15px rgba(0, 0, 0, 0.1)",
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          zIndex: 10,
          overflowY: "auto", 
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
          {[
            { title: "Mood Tracking & Analysis", icon: <FaHeartbeat />, key: "moodTracking" },
            { title: "Interactive Mental Health Advisor", icon: <FaLightbulb />, key: "mentalHealthAdvisor" },
            { title: "Long-Term Guided Programs", icon: <FaCalendarCheck />, key: "calendar" },
          ].map((feature) => (
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
                    background: "rgba(26, 229, 190, 0.15)",
                    transition: "background 0.3s ease",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px" }}>
                  <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
                    {feature.icon}
                  </motion.div>
                </Box>
                <ListItemText
                  primary={feature.title}
                  sx={{
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#fff",
                  }}
                />
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Box>

      {/* Main Content Area */}
      <Box
        sx={{
          marginLeft: { xs: 0, md: "250px" }, // Make sure the content pushes when the sidebar is visible
          flexGrow: 1,
          padding: 3,
          background: "#f4f6f9",
          color: "#333",
          zIndex: 5,
        }}
      >
        <Paper sx={{ padding: 3, background: "#ffffff", borderRadius: 2, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}>
          {renderFeature()}
        </Paper>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
