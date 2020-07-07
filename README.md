
## Setup

```sh
# Setting default configurations for your gcloud CLI prevents the Y/n prompt
gcloud config set compute/region europe-west1
gcloud config set run/platform managed
```

```sh
# See your existing configs
gcloud config list
```

```sh
# set project for gcloud CLI
gcloud config set project "my-project"

# get project from gcloud CLI
gcloud config get-value core/project

# set $PROJECT alias to be able to use below

## set from gcloud CLI
PROJECT=$(gcloud config get-value core/project 2> /dev/null)

## set from brain
PROJECT=my-project
```

## Build and deploy containers

### Google cloud
```sh
# 1. build container with google cloud build and put it in google cloud container registry (gcr)
gcloud builds submit --tag gcr.io/$PROJECT/container-name

# 2. "deploy image" == tell google cloud run which image to run
gcloud run deploy $PROJECT --image gcr.io/$PROJECT/container-name --platform managed --region europe-west1
```

### Docker
```sh
# 1. build container with docker cli
docker build -t gcr.io/$PROJECT/container-name .

# 2. push container to cloud container registry (gcr)
docker push gcr.io/$PROJECT/container-name
```

## Problems
```sh
# fix auth problem
gcloud auth configure-docker
```
