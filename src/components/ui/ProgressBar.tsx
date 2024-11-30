"use client";

import { DesktopProgress } from './progress/DesktopProgress';
import { MobileProgressSidebar } from './progress/MobileProgressSidebar';
import { useProgress } from './progress/useProgress';

const sections = [
  { id: 'hero', label: 'Accueil' },
  { id: 'about', label: 'À Propos' },
  { id: 'education', label: 'Formation' },
  { id: 'languages', label: 'Langues' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'motivation', label: 'Motivation' },
  { id: 'contact', label: 'Contact' },
];

export function ProgressBar() {
  const { visitedSections, progress, scrollToSection } = useProgress(sections);

  return (
    <>
      <DesktopProgress
        sections={sections}
        visitedSections={visitedSections}
        progress={progress}
        onSectionClick={scrollToSection}
      />
      <MobileProgressSidebar
        sections={sections}
        visitedSections={visitedSections}
        progress={progress}
        onSectionClick={scrollToSection}
      />
    </>
  );
}