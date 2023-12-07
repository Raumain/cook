# Dockerfile pour le frontend

# Utilisez l'image Node.js 20 comme image de base
FROM node:20

RUN npm install -g pnpm

# Créez un répertoire pour l'application
WORKDIR /app

# Copiez les fichiers package.json et pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Installez les dépendances
RUN pnpm install

# Copiez le reste du code de l'application
COPY . .

# Exposez le port 3000
EXPOSE 5173

# Commencez l'application
CMD ["pnpm", "dev"]
