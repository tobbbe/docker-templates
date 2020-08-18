# Docker node express template

## Local dev
Will run local files with nodemon on port 8080 through the docker container.
```sh
docker-compose up --build
```

Debug with vscode ("Docker: Attach to Node"). Make sure .vscode/launch.json with config exist.

## Deploy
```sh
# deploy to gcloud
npm run publish:gcloud --prefix src
```

[Read more how to deploy](https://github.com/tobbbe/docker-templates#build-and-deploy-containers)

