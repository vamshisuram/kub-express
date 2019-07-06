FROM node:12.6.0-alpine
COPY src /usr/src/app
COPY package.json package-lock.json /usr/src/
WORKDIR /usr/src
RUN npm install
EXPOSE 3001
CMD [ "npm", "start" ]
