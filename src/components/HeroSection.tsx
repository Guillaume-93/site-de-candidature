"use client";

import { motion } from 'framer-motion';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { siteData } from '../data/site-data';
import { Avatar } from './ui/Avatar';
import { animations } from '@/lib/animation';
import type { Company } from '@/types';

type Props = {
  company: Company;
};

export function HeroSection({ company }: Props) {
  return (
    <motion.section 
      {...animations.fadeIn}
      className="min-h-screen flex items-center justify-center bg-theme-primary theme-transition px-4 py-20 sm:py-0"
    >
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          {...animations.scaleIn}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div className="transform scale-125 sm:scale-100">
            <Avatar />
          </div>
        </motion.div>

        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-theme-primary text-center mb-4 sm:mb-6 px-4"
          {...animations.fadeInUp}
          transition={{ delay: 0.2, ...animations.fadeInUp.transition }}
        >
          Bonjour, je suis{' '}
          <span className="text-primary">{siteData.user.name}</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl sm:text-2xl md:text-3xl text-theme-secondary text-center mb-8 sm:mb-12 px-4"
          {...animations.fadeInUp}
          transition={{ delay: 0.4, ...animations.fadeInUp.transition }}
        >
          Je souhaite postuler chez{' '}
          <span className="text-primary font-medium">{company.name}</span>
        </motion.p>

        <motion.div
          {...animations.fadeInUp}
          transition={{ delay: 0.6, ...animations.fadeInUp.transition }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        >
          <a
            href="#about"
            className="w-full sm:w-auto btn-primary px-8 py-4 sm:py-3 rounded-lg font-medium transition-all duration-300 text-center text-lg sm:text-base"
          >
            En savoir plus
          </a>
          
          <a
            id="hero-cv-button"
            href={siteData.contact.documents.cv}
            download
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-theme-primary text-theme-primary px-8 py-4 sm:py-3 rounded-lg font-medium border-2 border-theme hover:bg-theme-accent transition-all duration-300 text-lg sm:text-base group"
          >
            <ArrowDownTrayIcon className="w-6 h-6 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            Télécharger CV
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}