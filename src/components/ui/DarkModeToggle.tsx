"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { animations, springProps } from '@/lib/animation';
import { useTheme } from './ThemeProvider';

export function DarkModeToggle() {
  const { currentTheme, setTheme } = useTheme();
  const isDark = currentTheme === 'dark';

  const toggleDarkMode = () => {
    setTheme(isDark ? 'default' : 'dark');
  };

  return (
    <motion.button
      {...animations.scaleIn}
      onClick={toggleDarkMode}
      className="fixed bottom-8 left-8 z-50 p-3 rounded-full bg-theme-primary border border-theme shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={springProps}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 360 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {isDark ? (
          <SunIcon className="w-6 h-6 text-theme-primary" />
        ) : (
          <MoonIcon className="w-6 h-6 text-theme-primary" />
        )}
      </motion.div>
    </motion.button>
  );
}