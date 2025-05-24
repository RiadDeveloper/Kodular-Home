"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "@/lib/animation";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const currentTheme = resolvedTheme || theme;
    setBgImage(currentTheme === "dark" 
      ? "https://ext.same-assets.com/3569418955/3601841544.png"
      : "https://ext.same-assets.com/2645679348/1387055618.png"
    );
  }, [theme, resolvedTheme, mounted]);

  // Prevent flash during hydration
  if (!mounted) {
    return (
      <div className="p-4 md:p-8">
        <div className="relative bg-gradient-to-br from-kodular-bg-pink via-kodular-bg-purple to-purple-400 text-white text-center py-32 overflow-hidden rounded-2xl shadow-2xl dark:shadow-purple-900/30 animate-pulse">
          <div className="container mx-auto px-4 relative z-10">
            <div className="h-16 w-48 bg-white/20 rounded mb-6 mx-auto" />
            <div className="h-8 w-96 bg-white/20 rounded mb-12 mx-auto" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="h-12 w-40 bg-white/20 rounded-full mx-auto" />
              <div className="h-12 w-40 bg-white/20 rounded-full mx-auto" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8">
      <motion.section
        className="relative bg-gradient-to-br from-kodular-bg-pink via-kodular-bg-purple to-purple-400 text-white text-center py-32 overflow-hidden rounded-2xl shadow-2xl dark:shadow-purple-900/30"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "all 0.3s ease-in-out",
          boxShadow: "inset 0 0 0 2px rgba(255, 255, 255, 0.1)"
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative Shapes with improved animations */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="absolute top-36 left-36 w-16 h-16 rotate-45 border-2 border-white/30 rounded-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{ scale: 1.1, rotate: 90, borderColor: "rgba(255,255,255,0.5)" }}
          />
          <motion.div
            className="absolute top-24 right-1/4 w-12 h-12 rotate-45 border-2 border-white/30 rounded-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            whileHover={{ scale: 1.1, rotate: 90, borderColor: "rgba(255,255,255,0.5)" }}
          />
          <motion.div
            className="absolute bottom-36 right-36 w-8 h-8 rotate-45 border-2 border-white/30 rounded-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.1, rotate: 90, borderColor: "rgba(255,255,255,0.5)" }}
          />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 font-jost dark:text-white text-gray-900"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            KODULAR
          </motion.h1>

          <motion.h2
            className="text-lg md:text-xl mb-12 font-light max-w-2xl mx-auto dark:text-white text-gray-800"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Much more than a modern app creator without coding
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.div 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.2)" }} 
              whileTap={{ scale: 0.95 }}
              className="overflow-hidden rounded-full"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-[#6200EA] hover:bg-[#7000FF] text-white relative overflow-hidden group transition-all duration-300 shadow-md hover:shadow-lg rounded-full px-8 dark:bg-[#8020FF] dark:hover:bg-[#9040FF]"
              >
                <Link href="https://c.kodular.io">
                  <span className="relative z-10 font-semibold">CREATE APPS!</span>
                  <motion.span 
                    className="absolute inset-0 bg-white/10 z-0" 
                    initial={{ x: "-100%", opacity: 0 }}
                    whileHover={{ x: "100%", opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              className="overflow-hidden rounded-full"
            >
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-2 dark:text-white text-gray-800 hover:bg-gray-800/5 dark:hover:bg-white/10 transition-all duration-300 rounded-full px-8 border-gray-800/50 dark:border-white/50 hover:border-gray-800 dark:hover:border-white backdrop-blur-sm"
              >
                <Link href="#getstarted">
                  <span className="relative z-10">SEE MORE</span>
                  <motion.span 
                    className="absolute inset-0 bg-gray-800/5 dark:bg-white/5 z-0" 
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
