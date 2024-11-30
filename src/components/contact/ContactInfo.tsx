"use client";

import { motion } from 'framer-motion';
import { siteData } from '@/data/site-data';
import { animations } from '@/lib/animation';
import type { Company } from '@/types';

type Props = {
  company: Company;
};

export function ContactInfo({ company }: Props) {
  return (
    <motion.div {...animations.stagger.container} className="space-y-6 theme-transition">
      <h3 className="text-xl font-semibold text-theme-primary mb-4">Mes coordonnées</h3>
      
      <div className="space-y-4">
        <motion.div 
          variants={animations.fadeInUp}
          className="flex items-center space-x-3"
        >
          <span className="text-primary">Email:</span>
          <a 
            href={`mailto:${siteData.user.email}`} 
            className="text-theme-secondary hover:text-primary transition-colors"
          >
            {siteData.user.email}
          </a>
        </motion.div>

        <motion.div 
          variants={animations.fadeInUp}
          className="flex items-center space-x-3"
        >
          <span className="text-primary">Téléphone:</span>
          <a 
            href={`tel:${siteData.user.phone}`} 
            className="text-theme-secondary hover:text-primary transition-colors"
          >
            {siteData.user.phone}
          </a>
        </motion.div>

        <motion.div 
          variants={animations.fadeInUp}
          className="flex items-center space-x-3"
        >
          <span className="text-primary">LinkedIn:</span>
          <a 
            href={siteData.user.linkedin}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-theme-secondary hover:text-primary transition-colors"
          >
            Profil LinkedIn
          </a>
        </motion.div>

        <motion.div 
          variants={animations.fadeInUp}
          className="flex items-center space-x-3"
        >
          <span className="text-primary">GitHub:</span>
          <a 
            href={siteData.user.github}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-theme-secondary hover:text-primary transition-colors"
          >
            Profil GitHub
          </a>
        </motion.div>

        {siteData.user.website && (
          <motion.div 
            variants={animations.fadeInUp}
            className="flex items-center space-x-3"
          >
            <span className="text-primary">Site web:</span>
            <a 
              href={siteData.user.website}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-theme-secondary hover:text-primary transition-colors"
            >
              Portfolio
            </a>
          </motion.div>
        )}
      </div>

      <motion.div 
        variants={animations.fadeInUp}
        className="mt-6"
      >
        <p className="text-theme-secondary">
          <span className="text-primary">Disponibilité:</span>{' '}
          {siteData.contact.availability}
        </p>
      </motion.div>
    </motion.div>
  );
}