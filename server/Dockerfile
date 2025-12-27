FROM node:25-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=5000
ENV MONGO_URI=mongodb://mongo:27017/todos-db
EXPOSE 5000
CMD ["node", "app.js"]