FROM node:alpine 


WORKDIR /usr/src/app

COPY package*.json .


RUN npm ci
RUN npm install -g

EXPOSE 3000
CMD [ "npm","run","start:dev" ]


