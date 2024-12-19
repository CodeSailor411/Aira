"use client"; // For Framer Motion and MUI

import React from "react";
import { FaHeartbeat, FaLightbulb, FaSearch, FaCalendarCheck } from "react-icons/fa"; // Updated icons
import { motion } from "framer-motion";
import { Box, Typography, Container } from "@mui/material";

// FeatureCard component with animations and enhanced UI
const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.1, boxShadow: "0px 15px 25px rgba(26, 229, 190, 0.3)" }}
    className="flex flex-col items-center p-6 bg-white shadow-xl rounded-xl w-72 md:w-80 h-auto transform transition duration-150"
  >
    <div className="text-5xl text-[#1ae5be] mb-4">{icon}</div>
    <h3 className="mt-4 text-2xl font-semibold text-gray-800 text-center">{title}</h3>
    <p className="mt-2 text-lg text-gray-600 text-center">{description}</p>
  </motion.div>
);

export default function Features() {
  return (
    <div className="py-20 bg-gradient-to-b from-[#192056] via-[#1e3a8a] to-[#1ae5be]">
      <Container maxWidth="lg">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <Typography variant="h3" sx={{ fontWeight: "bold", color: "white", lineHeight: 1.2 }} className="text-center">
            Our Key Features
          </Typography>
          <Typography variant="h6" sx={{ color: "rgba(255, 255, 255, 0.8)", marginTop: 2 }} className="text-center">
            Explore the transformative benefits of using Aira for your mental wellness.
          </Typography>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-wrap gap-8 justify-center">
          {/* Mood Tracking & Analysis */}
          <FeatureCard
            icon={<FaHeartbeat />}
            title="Mood Tracking & Analysis"
            description="Understand your emotional patterns and gain actionable insights to improve mental wellness."
          />

          {/* Interactive Mental Health Advisor */}
          <FeatureCard
            icon={<FaLightbulb />}
            title="Interactive Mental Health Advisor"
            description="Continuous monitoring and tailored sessions with an AI chatbot to assess and support mental wellness over time."
          />

          {/* Early Detection & Recommendations */}
          <FeatureCard
            icon={<FaSearch />}
            title="Early Detection & Recommendations"
            description="Identify early signs of mental health issues and get optimal therapeutic recommendations for proactive care."
          />
          
        </div>
      </Container>
    </div>
  );
}