#! /bin/bash

proj="andy/gecko4"
container="gecko4"

docker stop $container
docker rm $container

docker stop "gecko4_sarah"
docker rm "gecko4_sarah"

docker build -t $proj .

if [ $? -eq 0 ]; then
  docker run -d -p 80 \
          -e "RAILS_ENV=production" \
         --name $container \
         --link gecko4-postgres:pg \
         $proj

  docker run -d -p 80 \
          -e "RAILS_ENV=sarah" \
         --name gecko4_sarah \
         --link gecko4-postgres:pg \
         $proj
else
  echo 'failed to build'
fi