// Thèmes disponibles
export const themes = {
  default: {
    name: 'Classique',
    colors: {
      primary: {
        light: 'blue-500',
        DEFAULT: 'blue-600',
        dark: 'blue-700',
      },
      secondary: {
        light: 'purple-500',
        DEFAULT: 'purple-600',
        dark: 'purple-700',
      },
    },
  },
  dark: {
    name: 'Sombre',
    colors: {
      primary: {
        light: 'emerald-400',
        DEFAULT: 'emerald-500',
        dark: 'emerald-600',
      },
      secondary: {
        light: 'amber-400',
        DEFAULT: 'amber-500',
        dark: 'amber-600',
      },
    },
  },
} as const;

export const siteData = {
  // Thème actuel
  theme: {
    current: 'default' as keyof typeof themes, // Définit le thème actuel
  },

  // Liste des thèmes
  themes: {
    default: {
      name: 'Classique',
      colors: {
        primary: {
          light: 'blue-500',
          DEFAULT: 'blue-600',
          dark: 'blue-700',
        },
        secondary: {
          light: 'purple-500',
          DEFAULT: 'purple-600',
          dark: 'purple-700',
        },
      },
      animation: {
        duration: {
          DEFAULT: 0.5,
          fast: 0.3,
          slow: 0.8,
        },
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
    dark: {
      name: 'Sombre',
      colors: {
        primary: {
          light: 'emerald-400',
          DEFAULT: 'emerald-500',
          dark: 'emerald-600',
        },
        secondary: {
          light: 'amber-400',
          DEFAULT: 'amber-500',
          dark: 'amber-600',
        },
      },
      animation: {
        duration: {
          DEFAULT: 0.5,
          fast: 0.3,
          slow: 0.8,
        },
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  },

  // Informations personnelles
  user: {
    name: "Jane Doe",
    title: "Développeuse Full Stack",
    email: "jane.doe@example.com",
    phone: "+33 6 12 34 56 78",
    linkedin: "https://linkedin.com/in/janedoe",
    github: "https://github.com/janedoe",
    website: "https://janedoe.dev",
    avatar: "/images/avatars/avatar.jpg",
  },

  // Section À propos
  about: {
    summary: "Développeuse passionnée avec 5 ans d'expérience dans le développement d'applications web scalables.",
    skills: [
      "React/Next.js",
      "Node.js",
      "TypeScript",
      "AWS",
      "Docker"
    ],
    education: [
      {
        degree: "Master en Informatique",
        school: "École Polytechnique",
        period: "2018-2020",
        description: "Spécialisation en développement web et architecture logicielle"
      },
      {
        degree: "Licence en Informatique",
        school: "Université Paris-Saclay",
        period: "2015-2018",
        description: "Formation généraliste en informatique"
      }
    ],
    languages: [
      {
        name: "Français",
        level: "Langue maternelle"
      },
      {
        name: "Anglais",
        level: "Courante (C1)"
      },
      {
        name: "Espagnol",
        level: "Intermédiaire (B1)"
      }
    ]
  },

  // Expérience professionnelle
  experience: [
    {
      title: "Lead Développeuse",
      company: "TechStart",
      period: "2020-2023",
      description: "Direction technique d'une équipe de 5 développeurs, mise en place de l'architecture microservices"
    },
    {
      title: "Développeuse Full Stack",
      company: "WebAgency",
      period: "2018-2020",
      description: "Développement d'applications web pour des clients grands comptes"
    }
  ],

  // Portfolio
  portfolio: [
    {
      title: "Plateforme E-commerce",
      description: "Solution e-commerce complète avec paiement en ligne",
      link: "https://example.com/project1",
      image: "/images/projects/ecommerce.webp",
      technologies: ["Next.js", "Node.js", "MongoDB"],
      achievements: [
        "Augmentation des ventes de 150%",
        "Temps de chargement réduit de 60%"
      ]
    },
    {
      title: "Dashboard Analytics",
      description: "Tableau de bord en temps réel pour la visualisation de données",
      link: "https://example.com/project2",
      image: "/images/projects/dashboard.webp",
      technologies: ["React", "D3.js", "Firebase"],
      achievements: [
        "Traitement de 1M+ données/jour",
        "Réduction des coûts de 40%"
      ]
    }
  ],

  // Contact
  contact: {
    availability: "Disponible immédiatement",
    documents: {
      cv: "/documents/cv.pdf"
    }
  }
} as const;