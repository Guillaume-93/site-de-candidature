"use client";

import { useState, useCallback, useEffect } from 'react';
import { Section } from './types';

export function useProgress(sections: Section[]) {
  const [visitedSections, setVisitedSections] = useState<Set<string>>(new Set(['hero']));
  const [progress, setProgress] = useState((1 / sections.length) * 100);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const isScrollingUp = currentScrollY < lastScrollY;

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;

        if (isVisible) {
          setVisitedSections(prev => {
            const newSet = new Set(prev);
            if (isScrollingUp) {
              const currentIndex = sections.findIndex(s => s.id === id);
              sections.forEach((s, index) => {
                if (index > currentIndex) {
                  newSet.delete(s.id);
                }
              });
            } else {
              newSet.add(id);
            }
            return newSet;
          });
        }
      }
    });

    setLastScrollY(currentScrollY);
  }, [lastScrollY, sections]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const newProgress = (visitedSections.size / sections.length) * 100;
    setProgress(newProgress);
  }, [visitedSections, sections.length]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.offsetTop - 80;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return {
    visitedSections,
    progress,
    scrollToSection
  };
}