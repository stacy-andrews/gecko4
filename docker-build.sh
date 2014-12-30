#! /bin/bash

proj="andy/gecko4"
container="gecko4"

docker stop $container
docker rm $container

docker build -t $proj .

if [ $? -eq 0 ]; then
  docker run -d -p 80 \
         --name $container \
         --link gecko4-postgres:pg \
         $proj
else
  echo 'failed to build'
fi