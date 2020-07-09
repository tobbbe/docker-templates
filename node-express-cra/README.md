# Docker, node, express and create-react-app (cra) template

## Setup
```sh
# init cra app
# folder must be named "client" for build script
npx create-react-app client

# init server app
npm install --prefix server
```

## Local dev
Will run (through the docker container) using [concurrently](https://www.npmjs.com/package/concurrently):
- server app with nodemon on [localhost:8080](http://localhost:8080)
- client app (cra) in dev mode on [localhost:3000](http://localhost:3000)

```sh
docker-compose up --build
```

## Deploy
Building the container with Dockerfile will build cra and server app for production.


[How to deploy?](https://github.com/tobbbe/docker-templates#build-and-deploy-containers)