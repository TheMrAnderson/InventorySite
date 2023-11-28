FROM node:19.6.1-bullseye-slim

WORKDIR /usr/src/app
COPY ./package*.json /usr/src/app/
RUN npm install --only-production

COPY . .

RUN chown -R node /usr/src/app

EXPOSE 1883
EXPOSE 3000

USER node

HEALTHCHECK --interval=90s --timeout=2s --start-period=5s CMD node /usr/src/app/src/healthcheck.js

CMD ["node", "/usr/src/app/src/index.js"]