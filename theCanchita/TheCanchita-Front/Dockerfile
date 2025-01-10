FROM node:23-alpine

WORKDIR /app

COPY package*.json yarn.lock ./

RUN npm install

RUN yarn install

COPY . .

CMD ["yarn", "dev"]