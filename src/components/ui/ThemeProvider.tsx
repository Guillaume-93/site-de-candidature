"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { themes } from '@/data/site-data';

type ThemeContextType = {
  currentTheme: keyof typeof themes;
  setTheme: (theme: keyof typeof themes) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: 'default',
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<keyof typeof themes>('default');

  useEffect(() => {
    // Load theme from localStorage on initial mount
    const savedTheme = localStorage.getItem('theme') as keyof typeof themes;
    if (savedTheme && themes[savedTheme]) {
      setTheme(savedTheme);
    }
  }, []);

  const setTheme = (theme: keyof typeof themes) => {
    setCurrentTheme(theme);
    // Save theme to localStorage
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}