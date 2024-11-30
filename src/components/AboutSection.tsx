"use client";

import { motion } from 'framer-motion';
import { siteData } from '../data/site-data';

export function AboutSection() {
  return (
    <section id="about" className="section bg-theme-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-theme-primary">À Propos</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-theme-primary">Parcours</h3>
              <p className="text-theme-secondary mb-6">{siteData.about.summary}</p>
              
              <h3 className="text-xl font-semibold mb-4 text-theme-primary">Compétences</h3>
              <div className="flex flex-wrap gap-2">
                {siteData.about.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                    className="bg-primary text-white px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-theme-primary">Expérience</h3>
              <div className="space-y-6">
                {siteData.experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.3, ease: "easeOut" }}
                    className="border-l-2 border-primary pl-4"
                  >
                    <h4 className="font-medium text-theme-primary">{exp.title}</h4>
                    <p className="text-sm text-theme-accent">{exp.company} | {exp.period}</p>
                    <p className="text-theme-secondary mt-2">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}