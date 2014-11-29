#! /bin/bash

VBoxManage controlvm boot2docker-vm natpf1 "postgresql,tcp,127.0.0.1,5432,,5432"

docker run --name gecko4-postgres -p 5432:5432 -e POSTGRES_PASSWORD=123123123 -d postgres
