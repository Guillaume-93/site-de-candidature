"use client";

import { animations } from '@/lib/animation';
import type { Company } from '@/types';
import { motion } from 'framer-motion';
import { ContactForm } from './contact/ContactForm';
import { ContactInfo } from './contact/ContactInfo';

type Props = {
  company: Company;
};

export function ContactSection({ company }: Props) {
  return (
    <section id="contact" className="section bg-theme-primary overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...animations.fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-theme-primary">Contact</h2>
          <p className="text-theme-secondary">
            N&apos;hésitez pas à me contacter pour plus d&apos;informations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            {...animations.slideInLeft}
            className="card"
          >
            <ContactInfo company={company} />
          </motion.div>
          <motion.div
            {...animations.slideInRight}
            className="card"
          >
            <ContactForm company={company} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}