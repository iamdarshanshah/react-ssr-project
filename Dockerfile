FROM node:12-alpine

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/spacex-launch

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Building app
RUN npm run build
