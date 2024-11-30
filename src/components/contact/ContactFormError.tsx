"use client";

import { motion } from 'framer-motion';
import { animations } from '@/lib/animation';

export function ContactFormError() {
  return (
    <motion.div 
      {...animations.fadeInUp}
      className="p-4 bg-theme-accent text-theme-primary rounded-md theme-transition"
    >
      Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.
    </motion.div>
  );
}