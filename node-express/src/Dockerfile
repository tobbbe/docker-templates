# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:12.18.2-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
# if NODE_ENV=production no dev-dependency modules will be installed
COPY package*.json ./
RUN npm install
COPY . .

# Run the web service on container startup.
CMD [ "npm", "start" ]