FROM node:lts

WORKDIR /usr/app

COPY package*.json ./

COPY prisma ./prisma/

RUN apt-get -qy update && apt-get -qy install openssl

RUN npm install

RUN npm install @prisma/client

COPY . .

RUN npx prisma generate --schema ./prisma/schema.prisma
RUN npx prisma version

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]