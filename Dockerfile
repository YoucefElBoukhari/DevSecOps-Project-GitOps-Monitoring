# Use an LTS version of Node.js
FROM node:14 as build

# Install NVM
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Source NVM setup script
RUN /bin/bash -c "source /root/.nvm/nvm.sh && nvm --version"

# Use Node.js LTS version
RUN /bin/bash -c "source /root/.nvm/nvm.sh && nvm install --lts"

# Set the working directory
WORKDIR /app

# Install Angular CLI globally using the installed Node.js version
RUN /bin/bash -c "source /root/.nvm/nvm.sh && nvm use --lts && npm install -g @angular/cli"

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the application files to the container
COPY . .

# Build the Angular application with the production configuration
RUN ng build --configuration=production

# Use a smaller, production-ready image
FROM nginx:alpine

# Copy the built Angular app to the NGINX public directory
COPY --from=build /app/dist/angular2 /usr/share/nginx/html

# Expose the port
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
