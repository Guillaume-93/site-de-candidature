"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Portfolio } from '@/types';
import { animations } from '@/lib/animation';

type Props = {
  project: Portfolio;
  index: number;
};

export function PortfolioCard({ project, index }: Props) {
  return (
    <motion.div
      {...animations.fadeInUp}
      transition={{ delay: index * 0.2, ...animations.fadeInUp.transition }}
      className="card overflow-hidden"
    >
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <h3 className="text-xl font-semibold text-theme-primary mb-2">{project.title}</h3>
      <p className="text-theme-secondary mb-4">{project.description}</p>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium text-theme-primary mb-2">Technologies utilisées:</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              {...animations.scaleIn}
              transition={{ delay: index * 0.1 + techIndex * 0.05, ...animations.scaleIn.transition }}
              className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium text-theme-primary">Réalisations:</h4>
        <ul className="list-disc list-inside text-theme-secondary text-sm space-y-1">
          {project.achievements.map((achievement, achievementIndex) => (
            <motion.li
              key={achievementIndex}
              {...animations.fadeInUp}
              transition={{ delay: index * 0.1 + achievementIndex * 0.05, ...animations.fadeInUp.transition }}
            >
              {achievement}
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors group"
        whileHover={{ x: 5 }}
        transition={animations.springProps}
      >
        Voir le projet
        <svg 
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.a>
    </motion.div>
  );
}