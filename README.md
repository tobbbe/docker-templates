
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
gcloud config set project "project-name"

# get project from gcloud CLI
gcloud config get-value core/project

# set $PROJECT and $SERVICENAME to be able to use below
## set from brain
PROJECT=project-name
SERVICENAME=ex-website-name
## set from gcloud CLI
PROJECT=$(gcloud config get-value core/project 2> /dev/null)
```

## Build and deploy containers

### Google cloud run
Dont forget to first set gcloud cli project!

```sh
# 1. build container with google cloud build and put it in google cloud container registry (gcr)
gcloud builds submit --tag gcr.io/$PROJECT/$SERVICENAME

# 2. "deploy image" == tell google cloud run which image to run
gcloud run deploy $SERVICENAME --image gcr.io/$PROJECT/$SERVICENAME
```

### Docker
```sh
# 1. build container with docker cli
docker build -t gcr.io/$PROJECT/$SERVICENAME .

# 2. push container to cloud container registry (gcr)
docker push gcr.io/$PROJECT/$SERVICENAME

# 3. "deploy image" == tell google cloud run which image to run
gcloud run deploy $SERVICENAME --image gcr.io/$PROJECT/$SERVICENAME
```

## Problems
```sh
# fix auth problem
gcloud auth configure-docker
```
