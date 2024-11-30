"use client";

import { motion } from 'framer-motion';
import { animations } from '@/lib/animation';
import type { Company } from '@/types';

type Props = {
  company: Company;
};

export function MotivationSection({ company }: Props) {
  return (
    <section className="section bg-theme-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...animations.fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-theme-primary">
            Pourquoi {company.name} ?
          </h2>
          <p className="text-theme-secondary">
            Voici les raisons pour lesquelles je souhaite rejoindre votre équipe
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {company.whyCompany.map((reason, index) => (
            <motion.div
              key={index}
              {...animations.fadeInUp}
              transition={{ delay: index * 0.2, ...animations.fadeInUp.transition }}
              className="card"
            >
              <div className="text-primary mb-4">
                <motion.svg
                  className="w-8 h-8 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.3 + 0.2, ...animations.scaleIn.transition }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
              </div>
              <p className="text-theme-primary text-center">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}