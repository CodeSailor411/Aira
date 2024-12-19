'use client';

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import HeroSection from "./components/Sections/HeroSection";
import Features from "./components/Sections/Features";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <HeroSection id="hero-section" /> {/* Make sure HeroSection has the correct id */}
      <Features />

      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
          }}
        >
          <Link to="hero-section" smooth={true} duration={500} spy={true} offset={-70}>
            <Button
              variant="contained"
              sx={{
                background: " #192056",
                padding: "12px",
                borderRadius: "50%",
                minWidth: "50px",
                height: "50px",
                boxShadow: "0px 0px 10px rgba(26, 229, 190, 0.6)",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0px 0px 20px rgba(26, 229, 190, 0.8)",
                  transform: "scale(1.1)",
                  opacity: 0.9,
                },
              }}
            >
              ↑
            </Button>
          </Link>
        </motion.div>
      )}
    </div>
  );
}
