FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm ci --omit=dev
COPY . .
EXPOSE 80
CMD [ "node", "src/moonlandr.js" ]
