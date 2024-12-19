"use client";

import { motion } from "framer-motion";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { FiHeart, FiMessageCircle, FiSearch, FiCalendar } from "react-icons/fi";

export default function Services() {
  // Animation variants for the cards
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    whileHover: { scale: 1.05, boxShadow: "0px 8px 20px rgba(26, 229, 190, 0.4)" },
  };

  return (
    <div
      className="min-h-screen p-8 pt-24 bg-gradient-to-br from-[#1e3a8a] via-[#192056] to-[#1ae5be] text-white"
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >
      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.h1
          className="text-5xl font-extrabold tracking-tight leading-snug mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-[#1ae5be]">Services</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore our innovative tools and personalized solutions designed to
          support mental wellness and empower you to thrive.
        </motion.p>
      </div>

      {/* Services Section */}
      <Grid container spacing={4} justifyContent="center">
        {[
          {
            icon: <FiHeart size={50} color="#1ae5be" />,
            title: "Mood Tracking & Analysis",
            description:
              "Understand your emotional patterns and gain actionable insights to improve mental wellness.",
          },
          {
            icon: <FiMessageCircle size={50} color="#1ae5be" />,
            title: "Interactive Mental Health Advisor",
            description:
              "Continuous monitoring and tailored sessions with an AI chatbot to assess and support mental wellness over time.",
          },
          {
            icon: <FiSearch size={50} color="#1ae5be" />,
            title: "Early Detection & Recommendations",
            description:
              "Identify early signs of mental health issues and get optimal therapeutic recommendations for proactive care.",
          },
          {
            icon: <FiCalendar size={50} color="#1ae5be" />,
            title: "Long-Term Guided Programs",
            description:
              "Structured self-help programs with calendars for exercises, reflection, and progress tracking.",
          },
        ].map((service, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <motion.div
              className="flex justify-center"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              whileHover="whileHover"
            >
              <Card
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  color: "#fff",
                  borderRadius: "15px",
                  boxShadow: "0px 4px 15px rgba(26, 229, 190, 0.3)",
                  height: "100%",
                  width: "100%",
                }}
              >
                <CardContent className="text-center">
                  {service.icon}
                  <Typography
                    variant="h5"
                    sx={{ color: "#1ae5be", fontWeight: "bold", mt: 2 }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#ddd", mt: 1 }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
