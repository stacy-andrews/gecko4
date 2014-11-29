#! /bin/bash

proj="andy/gecko4"
container="gecko4"

docker stop $container
docker rm $container

docker build -t $proj .

docker run -d -p 80:80 --link gecko4-postgres:db -e SECRET_KEY_BASE=prod --name=$container  $proj
