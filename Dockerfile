FROM node:24-alpine

COPY index.css index.css
COPY index.html index.html
COPY index.js index.js
COPY index.ts index.ts
COPY package.json package.json
COPY tsconfig.json tsconfig.json

RUN npm install
CMD [ "node","index.js" ]