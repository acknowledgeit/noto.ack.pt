FROM node:12-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:12-alpine

ENV NODE_ENV production
ENV PORT 3000
WORKDIR /app

COPY --from=builder /app/dist /app

COPY package*.json ./
RUN npm ci --production

EXPOSE 3000
CMD [ "node", "server.js"]
