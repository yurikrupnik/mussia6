#! /bin/bash

set -e

#name=$npm_package_config_docker_image_org_name/$npm_package_config_docker_image_name
gc_image=gcr.io/mussia6/$npm_package_name
#dam=/$npm_package_repository_directory


docker build -t $gc_image . \
  --force-rm \
  --build-arg modulePath=$npm_package_config_modulePath

echo 'Finished building'
#docker tag $name \
#  $gc_image
#
docker push $gc_image
#echo 'Finished pushing'
#
gcloud run deploy $npm_package_name \
  --image $gc_image \
  --platform managed \
  --allow-unauthenticated \
  --region europe-west1 \
  --port $npm_package_config_port
