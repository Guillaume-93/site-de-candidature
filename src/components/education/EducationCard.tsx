"use client";

import { motion } from 'framer-motion';
import type { Education } from '@/types';

type Props = {
  education: Education;
  index: number;
};

export function EducationCard({ education, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: index * 0.2, ease: "easeOut" }}
      className="card"
    >
      <h3 className="text-xl font-semibold text-theme-primary">{education.degree}</h3>
      <p className="text-primary mt-1">{education.school}</p>
      <p className="text-theme-accent text-sm mt-1">{education.period}</p>
      <p className="text-theme-secondary mt-3">{education.description}</p>
    </motion.div>
  );
}