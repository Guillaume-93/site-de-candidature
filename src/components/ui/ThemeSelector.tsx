"use client";

import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { themes } from '@/data/site-data';
import { SwatchIcon } from '@heroicons/react/24/outline';
import { animations } from '@/lib/animation';

export function ThemeSelector() {
  const { currentTheme, setTheme } = useTheme();

  return (
    <motion.div
      {...animations.scaleIn}
      className="fixed top-4 right-4 z-50"
    >
      <div className="relative group">
        <div className="flex items-center gap-2 bg-theme-primary border border-theme rounded-lg px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
          <SwatchIcon className="w-5 h-5 text-theme-primary" />
          <div className="relative flex-1">
            <select
              value={currentTheme}
              onChange={(e) => setTheme(e.target.value as keyof typeof themes)}
              className="w-full bg-transparent text-theme-primary appearance-none cursor-pointer focus:outline-none py-1 pr-8 pl-2 theme-transition hover:bg-theme-accent rounded-md focus-within:ring-2 focus-within:ring-primary focus-within:ring-opacity-50"
              style={{ minWidth: '140px' }}
            >
              {Object.entries(themes).map(([key, theme]) => (
                <option 
                  key={key} 
                  value={key}
                  className="bg-theme-primary text-theme-primary py-3 px-4"
                >
                  {theme.name}
                </option>
              ))}
            </select>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg 
                className="w-4 h-4 text-theme-primary transition-transform duration-300 group-hover:translate-y-0.5"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}