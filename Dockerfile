FROM node:12.6.0-alpine
COPY src /usr/app/src
COPY package.json package-lock.json /usr/app/
WORKDIR /usr/app
RUN npm install
EXPOSE 3001 3002
CMD [ "npm", "start" ]
