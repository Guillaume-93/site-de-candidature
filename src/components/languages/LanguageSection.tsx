"use client";

import { motion } from 'framer-motion';
import { siteData } from '@/data/site-data';
import { LanguageCard } from './LanguageCard';

export function LanguageSection() {
  return (
    <section className="section bg-theme-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-theme-primary">Langues</h2>
          <p className="text-theme-secondary">Mes compétences linguistiques</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {siteData.about.languages.map((language, index) => (
            <LanguageCard key={index} language={language} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}