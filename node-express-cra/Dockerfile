FROM node:12-slim

ENV NODE_ENV=production

# build cra app for prod and move to app/build/
WORKDIR /usr/src/
COPY client ./client
RUN npm run --prefix client build \
&& mkdir -p app/build \
&& mv ./client/build ./app \
&& rm -r client/

# build server app for prod
WORKDIR /usr/src/app
# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY server/package*.json ./
RUN npm install --only=production
COPY server ./

# Run the web service on container startup.
CMD [ "npm", "start" ]