"use client";

import { motion } from 'framer-motion';
import { animations } from '@/lib/animation';

type Props = {
  isSubmitting: boolean;
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.645, 0.045, 0.355, 1.0]
    }
  }
};

export function ContactFormSubmit({ isSubmitting }: Props) {
  return (
    <motion.button
      type="submit"
      disabled={isSubmitting}
      className="w-full bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md"
      variants={buttonVariants}
      whileHover={animations.hover}
      whileTap={animations.tap}
      transition={animations.springProps}
    >
      {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
    </motion.button>
  );
}