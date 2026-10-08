FROM node:22-alpine
WORKDIR /app
COPY profile.js ./
CMD ["node","profile.js"]
