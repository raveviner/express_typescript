FROM alpine:3.11 as build_stage

RUN apk add --update npm nodejs

WORKDIR /usr/src
COPY package*.json tsconfig.json ./
COPY src ./src

RUN npm install
RUN npm run build

FROM alpine:3.11 as production_stage

RUN apk add --update npm nodejs

WORKDIR /usr/app

COPY package*.json ./
RUN npm install --only=prod
COPY --from=build_stage /usr/src/dist ./dist

EXPOSE 3000

CMD [ "npm", "start" ]
