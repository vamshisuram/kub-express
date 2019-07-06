FROM node:12.6.0-alpine
COPY src /usr/src/app
COPY package*.json ./
RUN npm install
WORKDIR /usr/src
EXPOSE 3001
CMD [ "npm", "start" ]
