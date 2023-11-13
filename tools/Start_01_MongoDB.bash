#!/bin/bash

## This file pulls docker mongodb-community-server 
## this should be pulled to the github
## afterwards before working on this file change the corresponding username and password
#########################################################################################@
export MONGODB_VERSION=6.0-ubi8
export MONGODB_ROOT_USER="Admin"
export MONGODB_ROOT_PASSWORD="NimdaPass"
sudo docker run --name mongodb -d -p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=$MONGODB_ROOT_USER \
-e MONGO_INITDB_ROOT_PASSWORD=$MONGODB_ROOT_PASSWORD  \
mongodb/mongodb-community-server:$MONGODB_VERSION
