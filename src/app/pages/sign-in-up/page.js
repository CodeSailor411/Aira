"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation"; // Added useRouter
import { CircularProgress,Box, TextField, Button, Typography, Card, CardContent } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

function SignInUpComponent() {
  const searchParams = useSearchParams();
  const router = useRouter(); // Initialize useRouter for navigation
  const [isSignIn, setIsSignIn] = useState(true);

  useEffect(() => {
    const initialState = searchParams.get("state") === "sign-up" ? false : true;
    setIsSignIn(initialState);
  }, [searchParams]);

  const handleToggle = () => setIsSignIn(!isSignIn);

  const handleSignIn = () => {
    if (isSignIn) {
      router.push("/pages/dashboard"); // Navigate to the dashboard on sign-in
    }
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0px 8px 20px rgba(26, 229, 190, 0.4)" },
    tap: { scale: 0.95 },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#1e3a8a",
      }}
    >
      {/* Background Image Layer */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/images/Design sans titre.svg')",
          backgroundSize: "contain",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          zIndex: 2,
          opacity: 0.8,
        }}
      />

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, rgba(30, 58, 138, 0.85), rgba(25, 32, 86, 0.95))",
          zIndex: 1,
        }}
      />

      {/* Form Section */}
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{ flex: 1, zIndex: 3 }}
      >
        <Card
          sx={{
            width: "80%",
            maxWidth: 400,
            backgroundColor: "#fff",
            borderRadius: "16px",
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <CardContent sx={{ padding: "32px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={isSignIn ? "sign-in" : "sign-up"}
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: "16px",
                    textAlign: "center",
                    color: "#192056",
                  }}
                >
                  {isSignIn ? "Sign In to Aira" : "Create an Account"}
                </Typography>

                <Box sx={{ marginBottom: "24px" }}>
                  {!isSignIn && (
                    <TextField
                      label="Full Name"
                      variant="outlined"
                      fullWidth
                      sx={{ marginBottom: 2 }}
                    />
                  )}
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    sx={{ marginBottom: 2 }}
                  />
                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Button
                      onClick={handleSignIn} // Trigger navigation on button click
                      variant="contained"
                      fullWidth
                      sx={{
                        background: "linear-gradient(to right, #1ae5be, #192056)",
                        fontWeight: "bold",
                        padding: "12px",
                        borderRadius: "8px",
                        "&:hover": {
                          boxShadow: "0px 6px 18px rgba(26, 229, 190, 0.6)",
                        },
                      }}
                    >
                      {isSignIn ? "Sign In" : "Sign Up"}
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
            </AnimatePresence>

            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                cursor: "pointer",
                textDecoration: "underline",
                color: "#1ae5be",
                "&:hover": { color: "#192056" },
              }}
              onClick={handleToggle}
            >
              {isSignIn
                ? "Don't have an account? Sign Up"
                : "Already have an account? Sign In"}
            </Typography>
          </CardContent>
        </Card>
      </motion.div>

      {/* Right Side Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{ flex: 1, zIndex: 3 }}
        className="hidden lg:flex items-center justify-center"
      >
        <Box
          sx={{
            textAlign: "center",
            maxWidth: "60%",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "rgba(88, 222, 255, 0.82)",
              fontWeight: "bold",
              marginBottom: "16px",
              lineHeight: "1.4",
              textShadow: "2px 4px 8px rgba(0, 0, 0, 0.82)",
            }}
          >
            Welcome to Aira
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "rgb(255, 255, 255)",
              fontSize: "1.5rem",
              lineHeight: "1.8",
              textShadow: "1px 2px 6px rgba(0, 0, 0, 0.81)",
            }}
          >
            Seamless mental health support tailored just for you.
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
}

export default function SignInUp() {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "#1e3a8a",
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      }
    >
      <SignInUpComponent />
    </Suspense>
  );
}
