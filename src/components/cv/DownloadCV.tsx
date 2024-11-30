"use client";

import { motion } from 'framer-motion';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { siteData } from '@/data/site-data';
import { useEffect, useState } from 'react';

export function DownloadCV() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroButton = document.querySelector('#hero-cv-button');
      if (heroButton) {
        const rect = heroButton.getBoundingClientRect();
        setIsVisible(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-8 right-8 z-50"
    >
      <a
        href={siteData.contact.documents.cv}
        download
        className="flex items-center gap-2 bg-theme-primary text-theme-primary px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border border-theme"
      >
        <ArrowDownTrayIcon className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
        <span>Télécharger CV</span>
      </a>
    </motion.div>
  );
}