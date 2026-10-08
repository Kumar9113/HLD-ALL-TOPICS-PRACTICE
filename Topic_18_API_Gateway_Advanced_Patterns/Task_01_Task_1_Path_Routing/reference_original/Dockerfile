FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN if [ -f package.json ]; then npm install --omit=dev; fi

COPY . .

ENV NODE_ENV=development
CMD ["node", "solution.js"]
