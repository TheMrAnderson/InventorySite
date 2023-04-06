FROM node:19.6.1-bullseye-slim

WORKDIR /usr/src/app
COPY ./package*.json /usr/src/app/
RUN npm install --only-production

COPY . .

RUN chown -R node /usr/src/app

EXPOSE 1883

USER node

CMD ["node", "/usr/src/app/src/index.js"]