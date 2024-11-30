"use client";

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Section } from './types';

type Props = {
  sections: Section[];
  visitedSections: Set<string>;
  progress: number;
  onSectionClick: (id: string) => void;
};

export function MobileProgressSidebar({ sections, visitedSections, progress, onSectionClick }: Props) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
      className="fixed right-0 top-0 h-full w-6 shadow-lg z-50 sm:hidden flex flex-col items-center justify-center"
    >
      <div className="relative h-[90%] w-1 bg-theme-accent rounded-full mx-auto overflow-hidden flex flex-col justify-between">
      <motion.div
  className="absolute top-0 left-0 w-full bg-primary"
  initial={{ height: 0 }}
  animate={{ height: `${progress}%` }}
  transition={{ duration: 0.5 }}
/>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-between py-4">
  {sections.map(({ id, label }) => (
    <motion.button
      key={id}
      onClick={() => onSectionClick(id)}
      className="relative group"
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", damping: 15, stiffness: 200 }}
    >
      <div
        className={cn(
          "w-3 h-3 rounded-full transition-all duration-300",
          visitedSections.has(id)
            ? 'bg-primary scale-110'
            : 'bg-theme-accent hover:bg-primary/50'
        )}
      />
      <span className="absolute right-full mr-2 px-2 py-1 bg-theme-primary border border-theme rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 -translate-y-1/2 top-1/2 shadow-lg">
        {label}
      </span>
    </motion.button>
  ))}
</div>
    </motion.div>
  );
}