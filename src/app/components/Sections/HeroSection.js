'use client'; // Required for using Framer Motion and MUI

import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link"; // Use Next.js Link for routing

export default function HeroSection() {
  // State for animations or interactivity
  const [hovered, setHovered] = useState(false);

  // Animation variants for Framer Motion
  const containerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <div
      id="hero-section" // Add ID to the HeroSection div for scroll targeting
      className="relative h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
        backgroundBlendMode: "color-dodge",
        backgroundColor: "#192056",
      }}
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0"
        style={{ zIndex: 0 }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 px-4 text-center"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-snug">
          Welcome to{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(to right, #1ae5be, #fff)",
            }}
          >
            Aira
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-2xl text-gray-300">
          Your supportive mental health companion.
        </p>

        {/* Button with routing to Sign-Up page */}
        <motion.div
          className="mt-8 inline-block"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Link href="/pages/sign-in-up?state=sign-up"> {/* Route to the sign-up page */}
            <Button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              variant="contained"
              sx={{
                px: 6,
                py: 2,
                fontSize: "1.125rem",
                fontWeight: "bold",
                borderRadius: "9999px",
                backgroundColor: hovered ? "#1ae5be" : "#192056",
                color: hovered ? "#192056" : "#fff",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#1ae5be",
                  color: "#192056",
                },
              }}
              endIcon={<FiArrowRight />}
            >
              Get Started
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
