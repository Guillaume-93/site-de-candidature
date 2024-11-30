"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { siteData } from '@/data/site-data';
import { animations, springProps } from '@/lib/animation';

export function Avatar() {
  return (
    <motion.div
      {...animations.scaleIn}
      transition={{
        ...animations.scaleIn.transition,
        scale: springProps
      }}
      className="relative"
    >
      <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-primary shadow-xl">
        {siteData.user.avatar ? (
          <Image
            src={siteData.user.avatar}
            alt={siteData.user.name}
            width={192}
            height={192}
            className="w-full h-full object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-primary/10 flex items-center justify-center">
            <span className="text-5xl text-primary">
              {siteData.user.name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          delay: 0.5,
          ...animations.scaleIn.transition,
          scale: springProps
        }}
        className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-3"
      >
        <svg 
          className="w-7 h-7" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}