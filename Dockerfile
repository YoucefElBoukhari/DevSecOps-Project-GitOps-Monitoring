FROM node:latest as build

WORKDIR /app

RUN npm install -g npm@10.3.0
RUN npm install -g @angular/cli

COPY package*.json ./

RUN npm update
RUN npm install
RUN npm install -g npm@10.3.0

COPY . .

RUN ng build --configuration=production
FROM nginx:alpine
COPY --from=build /app/dist/angular2 /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
