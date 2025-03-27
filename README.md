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
### Home Page
<img width="946" alt="image" src="https://github.com/user-attachments/assets/2af5b9fc-fb56-4b49-9e30-acaac44f86fe" />
<img width="947" alt="image" src="https://github.com/user-attachments/assets/289b1983-9960-476a-abf1-da5022902d0c" />
<img width="869" alt="image" src="https://github.com/user-attachments/assets/859b0e55-0bd6-40c8-a665-2da6d1f98d24" />
<img width="921" alt="image" src="https://github.com/user-attachments/assets/61630d4e-6d09-442f-afbf-558e90d9aeb8" />

### Registration Page
<img width="943" alt="image" src="https://github.com/user-attachments/assets/8f29a3ac-e5b6-4ef4-8f49-3314a70f879e" />

### Login page
<img width="944" alt="image" src="https://github.com/user-attachments/assets/1e09cc5a-9e05-4d81-90d5-6ff4e35bbfba" />

### Profil 
<img width="943" alt="image" src="https://github.com/user-attachments/assets/690ea04c-506a-4ce4-9fc7-c9410e67d4ea" />

### Publication 
<img width="622" alt="image" src="https://github.com/user-attachments/assets/ba52c738-154b-4c46-865d-060ae19825d5" />

### Create Book Page 
<img width="955" alt="image" src="https://github.com/user-attachments/assets/e9912a3e-eab6-4cfd-adde-bb15c1dc7622" />



## 📌 Améliorations futures
🔹 Intégration d'une API pour la récupération de livres en ligne  
🔹 Ajout d'un système de commentaires et de notation  
🔹 Intégration d'un moteur de recherche avancé

---
📌 **Développé par [ABDELALI MOUTAWASSIT]** 🚀
