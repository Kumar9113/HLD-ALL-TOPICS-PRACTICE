FROM node:22-alpine
WORKDIR /app
COPY backend/package.json ./
RUN npm install
COPY worker.js ./
CMD ["node","worker.js"]
