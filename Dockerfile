FROM node:alpine 


WORKDIR /usr/src/app

COPY package*.json .


RUN npm ci
RUN npm install -g


CMD [ "npm","run","start:dev" ]

