"use client";

import { motion } from "framer-motion"; // Import motion
import DashboardLayout from "../../components/Layout/DashboardLayout";

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Start with opacity 0 (invisible)
      animate={{ opacity: 1 }} // Fade in to opacity 1
      exit={{ opacity: 0 }} // Fade out when exiting
      transition={{ duration: 0.5 }} // Smooth transition duration
    >
      <DashboardLayout />
    </motion.div>
  );
}
