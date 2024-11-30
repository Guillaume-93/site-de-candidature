"use client";

import { animations } from '@/lib/animation';
import { motion } from 'framer-motion';

export function ContactFormError() {
  return (
    <motion.div 
      {...animations.fadeInUp}
      className="p-4 bg-theme-accent text-theme-primary rounded-md theme-transition"
    >
      Une erreur est survenue lors de l&apos;envoi du message. Veuillez réessayer.
    </motion.div>
  );
}