import { Company } from '@/types';

export const companies: Company[] = [
  {
    id: "spacex",
    name: "SpaceX",
    description: "Exploration spatiale et technologie de pointe.",
    values: ["Exploration", "Technologie", "Ambition"],
    whyCompany: [
      "SpaceX est une source d'inspiration.",
      "J'adore les défis technologiques.",
      "Votre mission d'exploration spatiale est incroyable."
    ],
    contactEmail: "recruit@spacex.com",
    theme: {
      primary: "red",
      secondary: "orange"
    }
  },
  {
    id: "tesla",
    name: "Tesla",
    description: "Innovateur dans les véhicules électriques et les énergies renouvelables.",
    values: ["Durabilité", "Innovation", "Énergie verte"],
    whyCompany: [
      "Tesla transforme l'industrie automobile.",
      "Je suis passionné par les énergies renouvelables.",
      "J'aimerais contribuer à un avenir durable."
    ],
    contactEmail: "careers@tesla.com",
    theme: {
      primary: "black",
      secondary: "green"
    }
  },
  {
    id: "google",
    name: "Google",
    description: "Leader mondial dans les technologies et l'intelligence artificielle.",
    values: ["Technologie", "Innovation", "Impact global"],
    whyCompany: [
      "Google est une référence en innovation.",
      "J'aime résoudre des problèmes complexes avec l'IA.",
      "Votre impact sur la technologie mondiale est inspirant."
    ],
    contactEmail: "jobs@google.com",
    theme: {
      primary: "blue",
      secondary: "yellow"
    }
  },
  {
    id: "amazon",
    name: "Amazon",
    description: "Un géant du commerce électronique et des services cloud.",
    values: ["Service client", "Innovation", "Échelle mondiale"],
    whyCompany: [
      "Amazon a redéfini le commerce électronique.",
      "Votre culture d'innovation est motivante.",
      "J'aimerais travailler sur des solutions qui touchent des millions de personnes."
    ],
    contactEmail: "careers@amazon.com",
    theme: {
      primary: "orange",
      secondary: "black"
    }
  }
];

export function getCompanyById(id: string): Company | undefined
{
  return companies.find(company => company.id === id);
}

export function getAllCompanyIds(): string[]
{
  return companies.map(company => company.id);
}
