FROM node:22-alpine
WORKDIR /app
COPY *.js ./
RUN npm init -y && npm pkg set type=module && npm install express
CMD ["node","flight.js"]
