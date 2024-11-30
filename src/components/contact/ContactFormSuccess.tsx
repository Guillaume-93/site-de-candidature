"use client";

import { animations } from '@/lib/animation';
import { motion } from 'framer-motion';

export function ContactFormSuccess() {
  return (
    <motion.div 
      {...animations.fadeInUp}
      className="p-4 bg-theme-accent text-theme-primary rounded-md theme-transition"
    >
      Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
    </motion.div>
  );
}