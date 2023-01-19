FROM node:alpine as development


WORKDIR /usr/src/app

COPY package*.json .


RUN npm ci
RUN npm install -g


CMD [ "npm","run","start:dev" ]



FROM node:alpine as production 

WORKDIR /usr/src/app

COPY package*.json .

COPY . .


RUN npm ci


CMD [ "npm","run","start:prod" ]


