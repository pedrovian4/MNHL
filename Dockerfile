FROM node:18.4.0-alpine3.16 


WORKDIR /usr/src/app

COPY package*.json .

RUN apk add --update --no-cache openssl1.1-compat
RUN apk add --no-cache libc6-compat

RUN npm ci
RUN npm install -g
RUN npx prisma generate
EXPOSE 3000

CMD [ "npm","run","start:dev" ]


