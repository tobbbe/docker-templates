# Docker, node, express and create-react-app (cra) template

## Setup
```sh
# init cra app
# folder must be named "client"
npx create-react-app client

# init server app
npm install --prefix server
```

## Local dev
Will run (through the docker container) using [concurrently](https://www.npmjs.com/package/concurrently):
- server app with nodemon on port 8080
- client app (cra) in dev mode on port 3000

```sh
docker-compose up --build
```

## Deploy
Building the container with Dockerfile will build cra and server app for production.
[Examples](https://github.com/tobbbe/docker-templates#build-and-deploy-containers)