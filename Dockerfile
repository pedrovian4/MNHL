FROM node:18.4.0


WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN npm ci
RUN npx prisma generate
EXPOSE 3000

CMD [ "npm","run","start:dev" ]


