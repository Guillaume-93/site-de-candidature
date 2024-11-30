"use client";

import { motion } from 'framer-motion';
import { siteData } from '@/data/site-data';
import { PortfolioCard } from './PortfolioCard';

export function PortfolioSection() {
  return (
    <section className="section bg-theme-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-theme-primary">Portfolio</h2>
          <p className="text-theme-secondary">Découvrez mes projets récents</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {siteData.portfolio.map((project, index) => (
            <PortfolioCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}