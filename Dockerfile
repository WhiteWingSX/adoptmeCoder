# Imagen base con Node
FROM node:24

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos package.json y package-lock.json
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del proyecto
COPY . .

# Exponemos el puerto (ajusta si usas otro)
EXPOSE 8080

# Comando para levantar el servidor
CMD ["npm", "start"]