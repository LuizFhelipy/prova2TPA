FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY src ./src
EXPOSE 8080
CMD ["npm", "start"] 
