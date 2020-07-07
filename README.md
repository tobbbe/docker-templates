
## setup
```
gcloud config set compute/region us-west1
gcloud config set run/platform managed
```
Setting default configurations for your gcloud CLI prevents the Y/n prompt

`gcloud config list`
See your existing configs

`gcloud config set project "my-project"`
set `$PROJECT` in shell

`gcloud config get-value core/project`
get `$PROJECT` in shell

## build and deploy containers

### Google cloud
1. `gcloud builds submit --tag gcr.io/$PROJECT/container-name`
build container with google cloud build and put it in google cloud container registry (gcr)

2. `gcloud run deploy $PROJECT --image gcr.io/$PROJECT/container-name --platform managed --region europe-west1`
"deploy image" == tell google cloud run which image to run

### Docker
1. `docker build -t gcr.io/$PROJECT/container-name .`
build container with docker cli

2. `docker push gcr.io/$PROJECT/container-name`
push container to cloud container registry (gcr)

## problems
`gcloud auth configure-docker`
fix auth problem