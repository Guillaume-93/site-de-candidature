"use client";

import { motion } from 'framer-motion';
import { UseFormRegister } from 'react-hook-form';
import { FormData } from './ContactForm';
import { animations } from '@/lib/animation';

type Props = {
  register: UseFormRegister<FormData>;
  errors: Record<string, any>;
};

const formFieldVariants = {
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

export function ContactFormFields({ register, errors }: Props) {
  return (
    <div className="space-y-4">
      <motion.div variants={formFieldVariants}>
        <label htmlFor="name" className="block text-sm font-medium text-theme-primary mb-1">
          Nom
        </label>
        <motion.input
          type="text"
          id="name"
          {...register('name', { required: 'Le nom est requis' })}
          className="w-full px-4 py-2 border border-theme rounded-md bg-theme-primary text-theme-primary placeholder-theme-secondary focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
          whileFocus={{ scale: 1.01 }}
          transition={animations.springProps}
        />
        {errors.name && (
          <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
        )}
      </motion.div>

      <motion.div variants={formFieldVariants}>
        <label htmlFor="email" className="block text-sm font-medium text-theme-primary mb-1">
          Email
        </label>
        <motion.input
          type="email"
          id="email"
          {...register('email', { 
            required: 'L\'email est requis',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Veuillez entrer une adresse email valide'
            }
          })}
          className="w-full px-4 py-2 border border-theme rounded-md bg-theme-primary text-theme-primary placeholder-theme-secondary focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
          whileFocus={{ scale: 1.01 }}
          transition={animations.springProps}
        />
        {errors.email && (
          <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
        )}
      </motion.div>

      <motion.div variants={formFieldVariants}>
        <label htmlFor="message" className="block text-sm font-medium text-theme-primary mb-1">
          Message
        </label>
        <motion.textarea
          id="message"
          rows={4}
          {...register('message', { required: 'Le message est requis' })}
          className="w-full px-4 py-2 border border-theme rounded-md bg-theme-primary text-theme-primary placeholder-theme-secondary focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 resize-y min-h-[100px]"
          whileFocus={{ scale: 1.01 }}
          transition={animations.springProps}
        />
        {errors.message && (
          <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>
        )}
      </motion.div>
    </div>
  );
}