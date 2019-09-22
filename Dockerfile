FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 30000
ENV url=<SERVER_URL>
ENV dns=<DNS_URL>
CMD  [ "node", "./bin/www"]
