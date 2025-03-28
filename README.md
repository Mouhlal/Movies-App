# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# 🎬 Movies-App  

**Movies-App** est une application web permettant aux utilisateurs de découvrir des films et séries populaires avec leurs détails (titres, affiches, notes, synopsis, etc.). Elle est développée avec **React.js**, utilise une API pour récupérer les informations des films et offre une interface utilisateur moderne et intuitive.  

📍 Site en ligne : [akrmovies.netlify.app](https://akrmovies.netlify.app/)

---
## ✨ Fonctionnalités principales  

✔️ **Affichage des films populaires** 🎥  
✔️ **Recherche de films et séries** 🔍  
✔️ **Détails des films (affiche, synopsis, note, etc.)** 📝  
✔️ **Interface responsive et fluide** 📱💻  
✔️ **Gestion des favoris (si implémenté)** ⭐  

---

## 🚀 Technologies utilisées  

### **Front-end** 🎨  
- **React.js** (framework JavaScript pour une interface dynamique)  
- **Vite.js** (optimisation du développement React)  
- **Tailwind CSS** / Bootstrap (design moderne et réactif)  
- **Axios** (pour récupérer les données d’une API)  
- **React Router** (gestion de la navigation)  

### **API** 🌍  
L’application utilise une API externe pour récupérer les films (ex: **The Movie Database API - TMDB**).  

---

## 📂 Structure du projet  

```
📦 Movies-App  
 ┣ 📂 src  
 ┃ ┣ 📂 components  # Composants réutilisables  
 ┃ ┣ 📂 pages       # Pages principales (Accueil, Détails, Recherche)  
 ┃ ┗ 📜 App.js      # Point d’entrée de l’application  
 ┣ 📜 package.json  # Dépendances du projet  
 ┣ 📜 README.md     # Documentation  
┗ 📜 vite.config.js  # Configuration de Vite.js  
```  

---

## ⚙️ Installation et exécution  

### 1️⃣ Cloner le projet  
```bash
git clone https://github.com/Mouhlal/Movies-App.git
cd app
```  

### 2️⃣ Installer les dépendances  
```bash
npm install
```  

### 3️⃣ Lancer l’application  
```bash
npm run dev
```  

L’application sera accessible à l’adresse **http://localhost:5173** 🚀  


