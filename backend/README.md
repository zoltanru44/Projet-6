## Utilisation du dossier Back-end du projet So Pekocko

# Technologies utilisées
Le dossier back-end utilise plusieurs dépendances:
- bcrypt
- bodyparser
- dotenv
- express
- jsonwebtoken
- mongoose
- mongoose-unique-validator
- multer

# Installation du back-end
- Dans le dossier backend, lancer <npm install>

# Paramétrage de l'accès à la base de donnée MongoDB:
- Créer une base de donnée MongoDB
- Créer au moins un compte utilisateur avec des droits de lecture et d'écriture
- Compléter le fichier <.env.test> avec le nom de l'utilisateur, le mot de passe et l'adresse du server
- Changer le nom de <.env.test> par <.env>

Lancer le server du back-end : --> <nodemon server>