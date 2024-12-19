"use client";

import { motion } from "framer-motion";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export default function About() {
  const router = useRouter(); // Initialize the router for navigation

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    whileHover: { scale: 1.05 },
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
          About <span className="text-[#1ae5be]">Aira</span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your trusted mental health companion, blending cutting-edge AI with
          compassionate care. Dive into our journey, values, and vision.
        </motion.p>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* About Us Card */}
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
              width: "100%",
              maxWidth: "500px",
            }}
          >
            <CardContent>
              <Typography variant="h4" sx={{ color: "#1ae5be", fontWeight: "bold", mb: 2 }}>
                About Us
              </Typography>
              <Typography variant="body1" sx={{ color: "#ddd", lineHeight: 1.6 }}>
                At Aira, we are dedicated to transforming the way mental health support is accessed and delivered. Our
                team consists of passionate innovators, engineers, and healthcare experts who believe in the power of AI
                to make a positive difference.
              </Typography>
              <Typography variant="body1" sx={{ color: "#ddd", lineHeight: 1.6, mt: 2 }}>
                Through user-friendly interfaces, we aim to provide everyone with tools to prioritize mental wellness
                anytime, anywhere.
              </Typography>
            </CardContent>
          </Card>
        </motion.div>

        {/* About Our Solution Card */}
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
              width: "100%",
              maxWidth: "500px",
            }}
          >
            <CardContent>
              <Typography variant="h4" sx={{ color: "#1ae5be", fontWeight: "bold", mb: 2 }}>
                About Our Solution
              </Typography>
              <Typography variant="body1" sx={{ color: "#ddd", lineHeight: 1.6 }}>
                Our solution harnesses the latest advancements in AI to create a seamless experience for users seeking
                mental health support. The platform integrates natural language processing, sentiment analysis, and
                secure user data handling to deliver personalized recommendations and resources.
              </Typography>
              <Typography variant="body1" sx={{ color: "#ddd", lineHeight: 1.6, mt: 2 }}>
                Aira ensures every user feels supported and empowered to take charge of their mental well-being. Explore
                our innovative approach to building a healthier tomorrow.
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Logo Section */}
      <div className="mt-16 text-center">
        <motion.img
          src="/images/Copie de AI.svg"
          alt="Aira Logo"
          className="mx-auto w-2/3 lg:w-1/3 object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            filter: "drop-shadow(0px 4px 6px rgba(26, 229, 190, 0.8))",
          }}
        />
      </div>

      {/* Footer-like CTA Section */}
      <div className="mt-16 text-center">
        <motion.h3
          className="text-2xl font-bold text-gray-200 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to learn more?
        </motion.h3>
        <motion.p
          className="text-lg text-gray-300 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover how Aira can make a difference for you and your loved ones.
        </motion.p>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Button
            onClick={() => router.push("/pages/contact")} // Redirect to Contact page
            variant="contained"
            sx={{
              background: "#1ae5be",
              px: 6,
              py: 2,
              fontSize: "1rem",
              borderRadius: "9999px",
              color: "#192056",
              boxShadow: "0px 4px 15px rgba(26, 229, 190, 0.6)",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                background: "#192056",
                color: "#1ae5be",
                boxShadow: "0px 8px 20px rgba(26, 229, 190, 0.8)",
              },
              "&:focus": {
                outline: "2px solid #1ae5be",
                outlineOffset: "2px",
              },
            }}
          >
            Contact Us
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
