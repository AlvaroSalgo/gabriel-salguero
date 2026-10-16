# Etapa 1: compila el sitio Astro (Node 24 = toolchain local, npm 11)
FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json ./

# npm install (no ci): el lock se genero en Windows y omite opcionales
# que Linux exige (@emnapi via @astrojs/compiler); install lo completa.
RUN npm install --no-audit --no-fund

COPY . .

RUN npm run build

# Etapa 2: sirve dist/ con nginx y compresion gzip
FROM nginx:alpine AS runtime

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
