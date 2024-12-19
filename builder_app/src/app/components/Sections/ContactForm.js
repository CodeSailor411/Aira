"use client"; // Required for components using MUI

import { TextField, Button, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <div className="py-20 flex justify-center items-center">
      {/* Card container with a background and shadow for the form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg"
      >
        <Card
          sx={{
            backgroundColor: "white",
            borderRadius: "16px",
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "16px" }}>
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", marginBottom: "24px" }}>
            We'd love to hear from you. Please fill out the form below.
          </Typography>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            <form>
              <TextField
                label="Your Name"
                aria-label="Your Name"
                variant="outlined"
                fullWidth
                className="mb-4"
                required
                color="primary"
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="Your Email"
                aria-label="Your Email"
                variant="outlined"
                fullWidth
                className="mb-4"
                required
                color="primary"
                sx={{ marginBottom: 2 }}
              />
              <TextField
                label="Your Message"
                aria-label="Your Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                className="mb-4"
                required
                color="primary"
                sx={{ marginBottom: 2 }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  padding: "12px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    backgroundColor: "#1ae5be",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
}
