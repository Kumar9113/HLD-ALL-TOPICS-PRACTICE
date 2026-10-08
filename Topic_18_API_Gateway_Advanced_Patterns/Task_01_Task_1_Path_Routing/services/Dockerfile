FROM node:22-alpine
WORKDIR /app
RUN npm init -y && npm pkg set type=module && npm install express
COPY *.js ./
CMD ["node","flight.js"]
