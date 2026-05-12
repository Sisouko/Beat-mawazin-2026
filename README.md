# 🎵 Beat — Mawazin 2026

> Application React multi-pages pour accompagner les festivaliers du **Mawazin 2026 — Rythmes du Monde**, le plus grand festival de musique au monde.

---

## 📋 Table des matières

- [🎵 Beat — Mawazin 2026](#-beat--mawazin-2026)
  - [📋 Table des matières](#-table-des-matières)
  - [🎯 À propos du projet](#-à-propos-du-projet)
  - [🌍 À propos du festival](#-à-propos-du-festival)
  - [✨ Fonctionnalités](#-fonctionnalités)
  - [🛠 Stack technique](#-stack-technique)
  - [🏗 Architecture](#-architecture)
    - [Flux de données](#flux-de-données)
  - [📄 Pages et Routes](#-pages-et-routes)
  - [🪝 Hooks utilisés](#-hooks-utilisés)
    - [`useState`](#usestate)
    - [`useEffect`](#useeffect)
    - [`useParams`](#useparams)
    - [`useNavigate`](#usenavigate)
    - [`useLocation`](#uselocation)
    - [`useContext`](#usecontext)
  - [🧩 Composants](#-composants)
    - [Composants de page](#composants-de-page)
    - [Composants réutilisables](#composants-réutilisables)
  - [🚀 Installation](#-installation)
    - [Prérequis](#prérequis)
    - [Cloner et installer](#cloner-et-installer)
  - [📜 Scripts disponibles](#-scripts-disponibles)
  - [📁 Structure des fichiers](#-structure-des-fichiers)
  - [🗄 Données — artists.json](#-données--artistsjson)
    - [Répartition par genre](#répartition-par-genre)
    - [Règles de modification](#règles-de-modification)
  - [🌐 Déploiement](#-déploiement)
    - [Déployer manuellement](#déployer-manuellement)
    - [Configuration Vercel](#configuration-vercel)
  - [📊 Critères de performance respectés](#-critères-de-performance-respectés)
  - [👤 Auteur](#-auteur)
  - [📅 Informations du brief](#-informations-du-brief)

---

## 🎯 À propos du projet

**Beat** est une application React professionnelle conçue pour transformer l'expérience du festival Mawazin. Avec 9 jours de festival, 7 scènes et 30 artistes, l'expérience peut vite devenir écrasante. Beat résout ce problème en offrant une navigation fluide entre pages dédiées — chaque section a sa propre URL, son propre rôle et sa propre logique.

Ce projet a été réalisé dans le cadre d'une formation frontend avancée, avec pour objectif de maîtriser l'architecture d'une vraie application React professionnelle en utilisant :

- **React Router v7** pour la navigation multi-pages
- **Context API** pour la gestion d'état global
- **Hooks React** dans des contextes réels et pertinents
- **localStorage** pour la persistance des données
- Un **système de props** clair entre composants parents et enfants

---

## 🌍 À propos du festival

**Mawazin — Rythmes du Monde** est le plus grand festival de musique au monde.

| Détail | Info |
|---|---|
| Édition | 21ème |
| Dates | 19 → 27 Juin 2026 |
| Ville | Rabat, Maroc |
| Artistes | 30+ |
| Scènes | 7 |
| Durée | 9 jours |

**Les 7 scènes :**
- OLM Souissi
- Nahda
- Bouregreg
- Théâtre Mohammed V
- Chellah
- Plage de Salé
- Scène de Quartier

---

## ✨ Fonctionnalités

- **Programme complet** — 30 artistes avec navigation par jour (19 → 27 juin) et filtrage par genre
- **Fiche artiste** — biographie, scène, heure, genre pour chaque artiste
- **Mon Planning** — sauvegarde des artistes favoris, organisés par jour
- **Passeport Musical** — mémoire des concerts vécus, filtrables par genre
- **Persistance locale** — les favoris et le passeport survivent aux rechargements via localStorage
- **Navigation fluide** — 5 routes React Router sans rechargement de page
- **Design responsive** — interface sombre et mobile-first, fidèle à l'ambiance nuit de concert
- **Titre dynamique** — le titre du navigateur se met à jour à chaque changement de route

---

## 🛠 Stack technique

| Outil | Version | Rôle |
|---|---|---|
| React | 19.0 | Bibliothèque UI |
| React Router DOM | v7 | Navigation multi-pages |
| Vite | 6.0 | Build tool & dev server |
| Context API | natif React | État global |
| localStorage | API navigateur | Persistance des données |
| Inter + Playfair Display | Google Fonts | Typographie |
| CSS vanilla | — | Styles (design system custom) |

---

## 🏗 Architecture

```
App (BrowserRouter + FestivalContext.Provider)
│
├── Layout
│   ├── Navbar          (useLocation → lien actif)
│   └── Outlet          (React Router v7)
│
├── / → Home
│   └── ConcertCard     (props: concert, onMarkAttended)
│
├── /programme → Programme
│   ├── DaySelector     (props: days, selectedDay, onSelect)
│   ├── GenreFilter     (props: genres, activeGenre, onFilter)
│   └── ArtistCard      (props: artist, isFavorite, onFavoriteToggle)
│
├── /programme/:artistId → ArtistDetail
│   └── (useParams → artistId)
│
├── /planning → MonPlanning
│   └── ArtistCard      (props: artist, isFavorite, onFavoriteToggle)
│
└── /passeport → PasseportMusical
    ├── GenreFilter     (props: genres, activeGenre, onFilter)
    └── ConcertItem     (props: concert)
```

### Flux de données

```
artists.json
    ↓ importé dans Programme.jsx
    ↓ filtré avec .filter() selon selectedDay + activeGenre
    ↓ mappé en composants <ArtistCard />
    ↓ utilisateur clique ❤️ → appelle toggleFavorite(artist)
    ↓ FestivalContext met à jour favorites[]
    ↓ useEffect sauvegarde dans localStorage
    ↓ MonPlanning lit favorites depuis le contexte
    ↓ affiche les artistes sauvegardés
```

---

## 📄 Pages et Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Vitrine du festival + concert du soir |
| `/programme` | Programme | Liste des 30 artistes avec filtres |
| `/programme/:artistId` | ArtistDetail | Fiche complète d'un artiste |
| `/planning` | MonPlanning | Favoris de l'utilisateur par jour |
| `/passeport` | PasseportMusical | Concerts marqués "J'y étais" |

---

## 🪝 Hooks utilisés

### `useState`
Gestion de l'état local dans les composants :
```jsx
// Jour sélectionné dans Programme
const [selectedDay, setSelectedDay] = useState('2026-06-19')

// Filtre genre actif
const [activeGenre, setActiveGenre] = useState('Tous')

// État global dans FestivalContext
const [favorites, setFavorites] = useState([])
const [passeport, setPasseport] = useState([])
```

### `useEffect`
Effets de bord dans les bons contextes :
```jsx
// Chargement depuis localStorage au montage
useEffect(() => {
  const saved = localStorage.getItem('beat-favorites')
  if (saved) setFavorites(JSON.parse(saved))
}, [])

// Sauvegarde à chaque modification
useEffect(() => {
  localStorage.setItem('beat-favorites', JSON.stringify(favorites))
}, [favorites])

// Mise à jour du titre de la page
useEffect(() => {
  document.title = titles[location.pathname] || 'Beat — Mawazin 2026'
}, [location.pathname])
```

### `useParams`
Récupération de l'artistId depuis l'URL :
```jsx
// /programme/7 → artistId = "7"
const { artistId } = useParams()
const artist = artists.find(a => a.id === artistId)
```

### `useNavigate`
Redirection programmatique :
```jsx
const navigate = useNavigate()

function handleAttended() {
  markAttended(concert)     // sauvegarde
  navigate('/passeport')    // redirection
}
```

### `useLocation`
Lecture de l'URL courante pour le lien actif :
```jsx
const location = useLocation()
const isActive = location.pathname === link.path
```

### `useContext`
Consommation du contexte global via hook custom :
```jsx
// Définition
export function useFestival() {
  return useContext(FestivalContext)
}

// Utilisation dans n'importe quel composant
const { favorites, toggleFavorite, isFavorite } = useFestival()
```

---

## 🧩 Composants

### Composants de page

| Composant | Route | Responsabilité |
|---|---|---|
| `Home.jsx` | `/` | Hero, stats, concert du soir |
| `Programme.jsx` | `/programme` | Liste filtrée des artistes |
| `ArtistDetail.jsx` | `/programme/:id` | Fiche complète |
| `MonPlanning.jsx` | `/planning` | Favoris groupés par jour |
| `PasseportMusical.jsx` | `/passeport` | Concerts vécus en grille |

### Composants réutilisables

| Composant | Props | Description |
|---|---|---|
| `Navbar` | — | Navigation fixe en bas |
| `Layout` | — | Shell avec Outlet |
| `ConcertCard` | `concert` | Carte concert du soir |
| `ArtistCard` | `artist` | Carte artiste cliquable |
| `DaySelector` | `days`, `selectedDay`, `onSelect` | Sélecteur de jour horizontal |
| `GenreFilter` | `genres`, `activeGenre`, `onFilter` | Filtres genre en pills |

---

## 🚀 Installation

### Prérequis

- Node.js v18 ou supérieur
- npm v9 ou supérieur

### Cloner et installer

```bash
# Cloner le dépôt
git clone https://github.com/VOTRE_USERNAME/beat-mawazin-2026.git

# Accéder au dossier
cd beat-mawazin-2026

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera disponible sur `http://localhost:5173`

---

## 📜 Scripts disponibles

```bash
# Lancer en développement (hot reload)
npm run dev

# Construire pour la production
npm run build

# Prévisualiser le build de production
npm run preview

# Vérifier le code avec ESLint
npm run lint
```

---

## 📁 Structure des fichiers

```
beat-mawazin-2026/
│
├── public/
│   └── index.html
│
├── src/
│   ├── data/
│   │   └── artists.json          # 30 artistes du festival
│   │
│   ├── context/
│   │   └── FestivalContext.jsx   # État global + localStorage
│   │
│   ├── components/
│   │   ├── Layout.jsx            # Shell (Navbar + Outlet)
│   │   ├── Navbar.jsx            # Navigation bas de page
│   │   ├── ConcertCard.jsx       # Carte concert du soir
│   │   ├── ArtistCard.jsx        # Carte artiste (liste)
│   │   ├── DaySelector.jsx       # Sélecteur de jour
│   │   └── GenreFilter.jsx       # Filtre par genre
│   │
│   ├── pages/
│   │   ├── Home.jsx              # Page d'accueil
│   │   ├── Programme.jsx         # Page programme
│   │   ├── ArtistDetail.jsx      # Page détail artiste
│   │   ├── MonPlanning.jsx       # Page mon planning
│   │   └── PasseportMusical.jsx  # Page passeport
│   │
│   ├── App.jsx                   # Router + routes
│   ├── main.jsx                  # Point d'entrée React
│   └── index.css                 # Design system global
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 🗄 Données — artists.json

Chaque artiste dans `src/data/artists.json` suit cette structure :

```json
{
  "id": "1",
  "name": "Oum",
  "day": "2026-06-19",
  "stage": "OLM Souissi",
  "genre": "Jazz",
  "time": "21:00",
  "bio": "Oum est une artiste marocaine..."
}
```

### Répartition par genre

| Genre | Artistes |
|---|---|
| Jazz | Oum, Hindi Zahra, Ibeyi, Aziz Maraka, Ibrahim Maalouf, Bombino |
| Pop | Stromae, Dua Lipa, Rosalia, Aya Nakamura, Saâd Lamjarred, The Weeknd |
| Gnawa | Gnawa Diffusion, Maâlem Mahmoud Guinia, Mehdi Nassouli |
| Afrobeats | Burna Boy, Baloji |
| Chaabi | Nass El Ghiwane, Khaled, Meriem Benallal, Raiss El Morsli |
| Reggae | Tiken Jah Fakoly, Soolking, Amazigh Kateb, Hoba Hoba Spirit |
| Hip-Hop | Kendrick Lamar, Nomad'Slam |
| Oriental | Farid El Atrache Tribute, Fairuz Tribute |
| Électro | DJ Snake |

### Règles de modification

> ⚠️ Ne jamais modifier un `id` existant — il est utilisé dans les URLs, localStorage et les comparaisons.
> 
> ✅ Le format `day` doit toujours respecter `YYYY-MM-DD`.
>
> ✅ Les 7 champs sont obligatoires pour chaque artiste.
>
> ✅ Les genres doivent être identiques en majuscules/minuscules pour que les filtres fonctionnent.

---

## 🌐 Déploiement

L'application est déployée sur **Vercel** avec déploiement continu depuis GitHub.

### Déployer manuellement

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel

# Déployer en production
vercel --prod
```

### Configuration Vercel

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

> 🔗 **Application en ligne :** [https://beat-mawazin-2026.vercel.app](https://beat-mawazin-2026.vercel.app)

---

## 📊 Critères de performance respectés

- ✅ Les 5 routes React Router v7 fonctionnent sans erreur
- ✅ Les 6 hooks sont utilisés dans le bon contexte
- ✅ Les props sont correctement typées et transmises sans prop drilling excessif
- ✅ Les données persistent dans localStorage après fermeture et réouverture
- ✅ L'interface est responsive et mobile-first
- ✅ L'application est accessible via une URL de production stable

---

## 👤 Auteur

**[Votre Nom]**

- GitHub: [@votre_username](https://github.com/votre_username)
- Projet: [beat-mawazin-2026](https://github.com/votre_username/beat-mawazin-2026)

---

## 📅 Informations du brief

| | |
|---|---|
| Lancement | 04/05/2026 |
| Soumission | 08/05/2026 |
| Durée | 5 jours |
| Mode | Individuel |
| École | [Nom de votre école] |

---

*Fait avec ❤️ pour Mawazin 2026 — Rythmes du Monde, Rabat, Maroc.*
