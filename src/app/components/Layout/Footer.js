"use client"; // For Framer Motion and MUI

import { motion } from "framer-motion";
import { Box, Container, Typography, IconButton, Grid } from "@mui/material";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(to top, #192056, #1e3a8a)",
        color: "white",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Footer Top Section */}
        <Grid container spacing={4} justifyContent="space-between" alignItems="center">
          {/* Logo and About Section */}
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center"
            >
              <img
                src="/images/Copie de AI (5).svg"
                alt="Aira Logo"
                width={130}
                height={65}
                className="object-contain"
              />  
            </motion.div>
            <Typography
              variant="body2"
              sx={{
                mt: 1,
                fontWeight: "bold",
                fontFamily: "'Open Sans', sans-serif",
                color: "rgba(255, 255, 255, 0.7)",
              }}
            >
              Compassion with Every Interaction
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "white", mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <motion.a
                href="/about"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="text-gray-300 hover:text-[#1ae5be] transition"
              >
                About Us
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="text-gray-300 hover:text-[#1ae5be] transition"
              >
                Our Services
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="text-gray-300 hover:text-[#1ae5be] transition"
              >
                Contact Us
              </motion.a>
            </Box>
          </Grid>

          {/* Social Media Icons */}
          <Grid item xs={12} sm={4} md={2} sx={{ textAlign: "center" }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", color: "white", mb: 2 }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              {[
                { href: "https://twitter.com", icon: <FaTwitter /> },
                { href: "https://facebook.com", icon: <FaFacebookF /> },
                { href: "https://linkedin.com", icon: <FaLinkedinIn /> },
                { href: "https://instagram.com", icon: <FaInstagram /> },
              ].map((social, index) => (
                <motion.div key={index} whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                  <IconButton
                    href={social.href}
                    target="_blank"
                    sx={{ color: "white", fontSize: "20px" }}
                  >
                    {social.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom Section */}
        <Box
          sx={{
            textAlign: "center",
            mt: 4,
            pt: 2,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
            © {new Date().getFullYear()} Aira. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
