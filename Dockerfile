FROM node:current-alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
EXPOSE $PORT
CMD yarn start