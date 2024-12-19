"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  // Exclude rendering on /dashboard and its subroutes
  if (pathname.startsWith("/dashboard")) {
    return null;
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "rgba(0, 0, 0, 0.5)", // Transparent background with slight black tint
        backdropFilter: "blur(10px)", // Background blur effect
        boxShadow: 3, // Subtle shadow for depth
        zIndex: 50, // Ensure navbar stays on top
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center", px: 6 }}>
        {/* Logo Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" passHref>
              <Image
                src="/images/Copie de AI.svg"
                alt="Aira Logo"
                width={100}
                height={50}
                className="object-contain"
              />
            </Link>
          </motion.div>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
          <Link href="/pages/about" passHref>
            <Button
              sx={{
                color: "white",
                fontSize: "16px",
                textTransform: "none",
                "&:hover": { color: "#1ae5be", textDecoration: "underline" },
              }}
            >
              About
            </Button>
          </Link>
          <Link href="/pages/services" passHref>
            <Button
              sx={{
                color: "white",
                fontSize: "16px",
                textTransform: "none",
                "&:hover": { color: "#1ae5be", textDecoration: "underline" },
              }}
            >
              Services
            </Button>
          </Link>
          <Link href="/pages/contact" passHref>
            <Button
              sx={{
                color: "white",
                fontSize: "16px",
                textTransform: "none",
                "&:hover": { color: "#1ae5be", textDecoration: "underline" },
              }}
            >
              Contact
            </Button>
          </Link>
        </Box>

        {/* Sign In / Sign Up Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="flex items-center">
            <Link href="/pages/sign-in-up?state=sign-in" passHref>
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "#1ae5be",
                  textTransform: "none",
                  borderRadius: "20px",
                  px: 4,
                  py: 1,
                  "&:hover": {
                    background: "rgba(26, 229, 190, 0.1)",
                    borderColor: "#1ae5be",
                    color: "#1ae5be",
                  },
                }}
              >
                Sign In
              </Button>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            className="flex items-center"
          >
            <Link href="/pages/sign-in-up?state=sign-up" passHref>
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(to right, #1ae5be, #192056)",
                  textTransform: "none",
                  color: "white",
                  borderRadius: "20px",
                  px: 4,
                  py: 1,
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0px 4px 10px rgba(26, 229, 190, 0.6)",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "200%",
                    height: "100%",
                    background: "linear-gradient(to right, #ffffff33, #ffffff00)",
                    opacity: 0.4,
                    transition: "all 0.4s ease",
                  },
                  "&:hover::before": {
                    left: "0%",
                  },
                  "&:hover": {
                    boxShadow: "0px 8px 15px rgba(26, 229, 190, 0.8)",
                  },
                }}
              >
                Sign Up
              </Button>
            </Link>
          </motion.div>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
