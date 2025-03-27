# 📚 Book Sharing App

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-FFB13B?style=for-the-badge)

## 🌟 Description
Book Sharing App est une plateforme permettant aux utilisateurs de partager, consulter et publier des livres. L'application est développée avec **Node.js**, **Express.js**, **MongoDB**, et utilise **EJS** pour le rendu des vues.

## 🚀 Fonctionnalités
✅ Authentification avec **Passport.js** (Inscription/Login)  
✅ Création et gestion des livres  
✅ Upload d'images pour les livres  
✅ Gestion de profil utilisateur  
✅ Interface dynamique avec **EJS**

## 🏗️ Installation

1️⃣ **Cloner le projet**
```bash
git clone https://github.com/votre-repo/book-sharing-app.git
cd book-sharing-app
```

2️⃣ **Installer les dépendances**
```bash
npm install
```

3️⃣ **Configurer la base de données**
- Modifier le fichier `config/database.js` avec les informations de votre base MongoDB.

4️⃣ **Lancer le serveur**
```bash
npm start
```
Le serveur sera accessible sur **http://localhost:3000**

## 📁 Structure du Projet
```bash
📂 book-sharing-app
 ├── 📁 config         # Configuration de la BD & Passport
 ├── 📁 models         # Modèles Mongoose
 ├── 📁 routes         # Routes Express
 ├── 📁 views          # Fichiers EJS pour le rendu
 ├── 📁 public         # Fichiers CSS, JS, images
 ├── 📁 uploads        # Images des livres uploadées
 ├── server.js        # Fichier principal
 ├── package.json     # Fichier de configuration npm
```

## 📜 Routes Principales
| Route | Méthode | Description |
|--------|--------|-------------|
| `/` | GET | Redirige vers `/books` |
| `/books` | GET | Affiche la liste des livres |
| `/books/details` | GET | Affiche les détails d'un livre |
| `/auth/login` | GET | Page de connexion |
| `/auth/signup` | GET | Page d'inscription |
| `/users/profile` | GET | Page de profil utilisateur |

## 🔐 Authentification
L'application utilise **Passport.js** avec une stratégie locale pour la connexion et l'inscription.

## 📷 Upload d'images
L'upload des images est géré avec **Multer**, et les fichiers sont stockés dans le dossier `uploads/images`.

## 📷 Screens pour le site :


## 📌 Améliorations futures
🔹 Intégration d'une API pour la récupération de livres en ligne  
🔹 Ajout d'un système de commentaires et de notation  
🔹 Intégration d'un moteur de recherche avancé

---
📌 **Développé par [ABDELALI MOUTAWASSIT]** 🚀
