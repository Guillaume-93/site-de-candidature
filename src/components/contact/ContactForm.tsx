"use client";

import { animations } from '@/lib/animation';
import { useForm as useFormspree } from '@formspree/react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { ContactFormFields } from './ContactFormFields';
import { ContactFormSubmit } from './ContactFormSubmit';
import { ContactFormSuccess } from './ContactFormSuccess';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export function ContactForm() {
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [state, sendToFormspree] = useFormspree(formspreeId || "");

  const onSubmit = async (data: FormData) => {
    await sendToFormspree(data);
    if (state.succeeded) {
      reset(); // Réinitialise les champs après l'envoi
    }
  };

  // Si le formulaire est soumis avec succès, affiche uniquement le message de succès
  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-6"
      >
        <ContactFormSuccess />
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.5,
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {/* Champs du formulaire */}
      <ContactFormFields register={register} errors={errors} />

      {/* Bouton d'envoi */}
      <motion.div variants={animations.fadeInUp}>
        <ContactFormSubmit isSubmitting={state.submitting} />
      </motion.div>
    </motion.form>
  );
}
