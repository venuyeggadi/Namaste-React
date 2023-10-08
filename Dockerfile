FROM node:18-alpine as build-stage

WORKDIR /Namaste-React/

COPY src/ /Namaste-React/src
COPY public/ /Namaste-React/public
COPY assets/ /Namaste-React/assets
COPY package.json /Namaste-React/

RUN npm install

RUN npm run build --silent

FROM node:18-alpine
COPY --from=build-stage /Namaste-React/build /Namaste-React/build

CMD ["npm", "start"]