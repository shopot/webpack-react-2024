#!/bin/sh

if [ ! -f .env ];then
    echo "Error: .env file not found"
    exit
fi

export $(grep -v '^#' .env | xargs)

IMAGE_SUFFIX="${IMAGE_SUFFIX%%[[:cntrl:]]}"

PROJECT_NAME="${PROJECT_NAME%%[[:cntrl:]]}"

echo "Build image: $PROJECT_NAME:${IMAGE_SUFFIX}"

docker build -t $PROJECT_NAME:"${IMAGE_SUFFIX}" -f ./Dockerfile .

# Working only with Linux
# docker save "webpack-react-2024":20240401_001 | gzip > webpack-react-2024_20240401_001.tar.gz

echo "docker image ${PROJECT_NAME}:${IMAGE_SUFFIX} created."
echo "docker save ${PROJECT_NAME}:${IMAGE_SUFFIX} | gzip > ${PROJECT_NAME}_${IMAGE_SUFFIX}.tar.gz"

echo "Done!!!"
