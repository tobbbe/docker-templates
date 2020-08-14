# this Dockerfile is only used for development (see ../docker-compose.yaml)

FROM node:12.18.2-alpine

WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY ./package*.json ./

# if NODE_ENV=production no dev-dependency modules will be installed
RUN npm install