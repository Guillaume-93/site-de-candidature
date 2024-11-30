"use client";

import { motion } from 'framer-motion';
import type { Language } from '@/types';

type Props = {
  language: Language;
  index: number;
};

export function LanguageCard({ language, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
      className="card flex items-center justify-between"
    >
      <span className="text-theme-primary font-medium">{language.name}</span>
      <span className="text-primary text-sm">{language.level}</span>
    </motion.div>
  );
}