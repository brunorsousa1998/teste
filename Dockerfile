FROM node:18

WORKDIR /app

COPY package.json .
COPY src src

CMD npm start
