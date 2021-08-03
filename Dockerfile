FROM node:14.17

WORKDIR /usr/src/app

EXPOSE 4000

COPY package.json ./
COPY .env ./
COPY dist ./dist

RUN npm install

CMD [ "npm", "run", "serve:ssr"]
