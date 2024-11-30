# Site de Motivation Interactive

Un site web moderne et interactif servant de lettre de motivation dynamique. Construit avec Next.js, Tailwind CSS et Framer Motion, il offre une expérience utilisateur fluide et professionnelle.

## ✨ Caractéristiques

- 🎨 Design moderne et responsive
- 🌓 Mode sombre
- 🎬 Animations fluides avec Framer Motion
- 📝 Formulaire de contact fonctionnel avec Formspree
- 📱 Optimisé pour mobile
- 🚀 Performance optimale avec SSG
- 📊 Barre de progression interactive
- 🖼️ Support d'avatar et images de projets
- 🏢 Support multi-entreprises

## 🛠️ Technologies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- Formspree

## 📦 Installation

1. Clonez le projet
2. Installez les dépendances :
```bash
npm install
```

3. Configurez les variables d'environnement :
   - Copiez `.env.example` vers `.env.local`
   - Ajoutez votre ID Formspree :
```env
NEXT_PUBLIC_FORMSPREE_ID=votre-id-formspree
```

4. Lancez le serveur de développement :
```bash
npm run dev
```

## 🎯 URLs Multi-entreprises

Le site génère automatiquement des URLs uniques pour chaque entreprise :

```
https://votre-domaine.com/[id-entreprise]
```

### URLs Disponibles

- `/spacex` - Pour SpaceX (Exploration Spatiale)
- `/tesla` - Pour Tesla (Véhicules électriques & Énergies renouvelables)
- `/google` - Pour Google (Technologies & Intelligence artificielle)
- `/amazon` - Pour Amazon (Commerce électronique & Services cloud)


### Ajouter une Nouvelle Entreprise

1. Modifiez `src/data/companies.ts` :
```typescript
export const companies = [
  {
    id: "entreprise",           // URL: /entreprise
    name: "Nom Entreprise",     // Nom affiché
    description: "Description de l'entreprise",
    values: ["Valeur 1", "Valeur 2"],
    whyCompany: [
      "Raison 1",
      "Raison 2",
      "Raison 3"
    ],
    contactEmail: "contact@entreprise.com",
    theme: {
      primary: "blue",
      secondary: "purple"
    }
  }
];
```

2. La page sera automatiquement générée et accessible via `/[id-entreprise]`

## 🎨 Personnalisation

### Avatar

1. Ajoutez votre photo de profil :
   - Format recommandé : 400x400px, ratio 1:1
   - Formats supportés : JPG, PNG, WebP
   - Placez l'image dans : `/public/images/avatars/`
   - Nommez-la : `avatar.jpg` (ou .png, .webp)

2. Mettez à jour dans `site-data.ts` :
```typescript
user: {
  avatar: "/images/avatars/avatar.jpg"
}
```

### Images de Projets

1. Ajoutez les images de vos projets :
   - Format recommandé : 1200x800px, ratio 3:2
   - Placez-les dans : `/public/images/projects/`
   - Nommez-les de manière descriptive (ex: `ecommerce.jpg`)

2. Mettez à jour dans `site-data.ts` :
```typescript
portfolio: [
  {
    image: "/images/projects/ecommerce.jpg"
  }
]
```

### Thèmes Disponibles

Le site propose deux thèmes :
- `default` : Thème clair (bleu/violet)
- `dark` : Thème sombre (émeraude/ambre)

Le thème peut être changé via :
- Le toggle mode sombre/clair en bas à gauche

## 📧 Configuration de Formspree

1. Créez un compte sur [Formspree](https://formspree.io)
2. Créez un nouveau formulaire
3. Récupérez l'ID du formulaire
4. Ajoutez-le dans `.env.local`

## 📱 Responsive Design

Le site s'adapte automatiquement à toutes les tailles d'écran :
- Mobile (< 640px)
- Tablette (640px - 1024px)
- Desktop (> 1024px)

## 🔧 Scripts Disponibles

- `npm run dev` : Mode développement
- `npm run build` : Build de production
- `npm run start` : Démarrage en production

## 📁 Structure du Projet

```
src/
├── app/                 # Configuration Next.js et pages
│   ├── [company]/      # Pages dynamiques par entreprise
│   └── page.tsx        # Page de redirection
├── components/         # Composants React
│   ├── contact/        # Formulaire de contact
│   ├── education/      # Section formation
│   ├── languages/      # Section langues
│   ├── portfolio/      # Section portfolio
│   └── ui/            # Composants UI réutilisables
├── data/              # Données personnalisables
│   ├── site-data.ts   # Configuration globale
│   └── themes.ts      # Configuration des thèmes
├── lib/               # Utilitaires et configuration
│   ├── animation.ts   # Configurations des animations
│   ├── companies.ts   # Données des entreprises
│   └── env.ts        # Gestion des variables d'environnement
├── types/             # Types TypeScript
└── public/           # Assets statiques
    ├── images/       # Images du site
    │   ├── avatars/  # Photos de profil
    │   └── projects/ # Images des projets
    └── documents/    # CV et autres documents
```

## 🔒 Sécurité

- Variables d'environnement sécurisées
- Validation des formulaires
- Protection anti-spam via Formspree
- Sanitization des entrées utilisateur

## 📈 Performance

- Génération statique (SSG)
- Images optimisées
- Chargement différé
- Animations optimisées
- Code minifié en production

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.