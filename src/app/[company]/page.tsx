import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { DownloadCV } from '@/components/cv/DownloadCV';
import { EducationSection } from '@/components/education/EducationSection';
import { HeroSection } from '@/components/HeroSection';
import { LanguageSection } from '@/components/languages/LanguageSection';
import { MotivationSection } from '@/components/MotivationSection';
import { PortfolioSection } from '@/components/portfolio/PortfolioSection';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { getAllCompanyIds, getCompanyById } from '@/data/companies';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: { company: string };
};

export async function generateStaticParams() {
  const companyIds = getAllCompanyIds();
  return companyIds.map(id => ({ company: id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const company = getCompanyById(params.company);
  
  if (!company) {
    return {
      title: 'Page non trouvée',
      description: 'La page que vous recherchez n\'existe pas.'
    };
  }

  return {
    title: `Candidature ${company.name}`,
    description: `Lettre de motivation interactive pour ${company.name}`
  };
}

export default function CompanyPage({ params }: Props) {
  const company = getCompanyById(params.company);

  if (!company) {
    notFound();
  }

  return (
    <main className="theme-transition">
      <ProgressBar />
      <section id="hero">
        <HeroSection company={company} />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="education">
        <EducationSection />
      </section>
      <section id="languages">
        <LanguageSection />
      </section>
      <section id="portfolio">
        <PortfolioSection />
      </section>
      <section id="motivation">
        <MotivationSection company={company} />
      </section>
      <section id="contact">
        <ContactSection company={company} />
      </section>
      <DownloadCV />
    </main>
  );
}