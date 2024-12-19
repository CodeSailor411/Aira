"use client"; // Required for using Framer Motion and MUI
import { motion } from "framer-motion";

const logos = [
  "/logo.svg",  // Add your project logos here
  "/file.svg",
  "/window.svg",
];

export default function LogoSection() {
  return (
    <div className="py-20 bg-gradient-to-r from-gradientStart to-gradientEnd">
      <div className="text-center mb-12">
        <h2 className="text-4xl text-white font-extrabold">Trusted By</h2>
        <p className="text-lg text-white mt-4">We partner with leading brands</p>
      </div>
      <div className="flex justify-center space-x-8">
        {logos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt="logo"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="h-20"
          />
        ))}
      </div>
    </div>
  );
}
