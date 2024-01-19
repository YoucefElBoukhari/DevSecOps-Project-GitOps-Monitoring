# Use the official Node.js image as a base image
FROM node:latest as build

# Set the working directory
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies

RUN npm install
RUN npm install -g npm@10.3.0

# Copy the application files to the container
COPY . .

# Build the Angular application
RUN ng build --prod

# Use a smaller, production-ready image
FROM nginx:alpine

# Copy the built Angular app to the NGINX public directory
COPY --from=build /app/dist/angular2 /usr/share/nginx/html

# Expose the port
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
