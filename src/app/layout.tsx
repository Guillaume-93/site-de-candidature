import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { DarkModeToggle } from '@/components/ui/DarkModeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lettre de Motivation Interactive',
  description: 'Une lettre de motivation interactive et personnalisée',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
          <DarkModeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}