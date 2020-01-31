##### BUILD ENVIRONMENT
FROM node:10.16.0-alpine as build

WORKDIR /app

RUN apk add yarn

COPY package.json .
COPY yarn.lock .
COPY public ./public
COPY src ./src

RUN yarn install --silent
RUN yarn build

##### PRODUCTION ENVIRONMENT
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]