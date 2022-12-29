FROM node:18-alpine

WORKDIR /usr/app

COPY package*.json ./

#RODAR ESSE PARA LTS
#RUN apt-get -qy update && apt-get -qy install openssl

#RODAR ESSE QUANDO A VERSÃO FOR ALPINE
RUN apk update && apk add openssl

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]