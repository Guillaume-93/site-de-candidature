"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Section } from './types';

type Props = {
  sections: Section[];
  visitedSections: Set<string>;
  progress: number;
  onSectionClick: (id: string) => void;
};

export function DesktopProgress({ sections, visitedSections, progress, onSectionClick }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-theme-primary border-b border-theme shadow-sm theme-transition hidden sm:block"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="relative h-2 bg-theme-accent rounded-full overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 h-full bg-primary"
            initial={{ width: `${(1 / sections.length) * 100}%` }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        <div className="flex justify-between mt-2 text-xs">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => onSectionClick(id)}
              className={cn(
                "px-2 py-1 rounded hover:bg-theme-accent transition-all duration-300",
                visitedSections.has(id) 
                  ? 'text-primary font-medium' 
                  : 'text-theme-secondary hover:text-primary'
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}