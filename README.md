# Node Mongo API Template with Docker

## Overview

This project is a Node.js application with MongoDB integration, containerized using Docker.

## Prerequisites

- Node.js (v18.x or later)
- Docker
- Docker Compose (optional but recommended)

## Environment Setup

Create a `.env` file in the root directory with the following content:

```shell
MONGO_URI=mongodb://mongo:27017/node-mongo-api
PORT=3000
```
## Docker Commands

### 1. Build Docker Image

To build the Docker image, use the following commands:

**With Docker Compose:**

```sh
docker-compose build
```
Without Docker Compose:
    
```sh
docker build -t node-mongo-api-template:latest .
```
## 2. Run Docker Container

To run the Docker container, use these commands: 

With Docker Compose:
```sh
docker-compose up
```
Without Docker Compose:
```sh
docker run -p 5000:5000 --env-file .env node-mongo-api-template:latest
```
## 3. Verify Running Containers

To verify that the containers are running, use the following command:

```sh
docker ps
```
## 4. Access the Application

Open your browser or Postman and navigate to http://localhost:5000 to access the application.

## 5. Stop Docker Container

To stop the Docker container, use the following command:

With Docker Compose:

```sh
docker-compose down
```
Without Docker Compose:

```sh
docker stop <container_id>
```
## 6. Remove Docker Container

To remove the Docker container, use the following command:


```sh
docker rm <container_id>
```

## 7. Rebuild and Run Docker Container After Code Changes

If you make code changes, rebuild and restart the Docker container:

With Docker Compose:

```sh
docker-compose up --build
```

Without Docker Compose:

```sh
docker build -t node-mongo-api-template:latest .
```

Run the new container:
    
```sh
docker run -p 5000:5000 --env-file .env node-mongo-api-template:latest
```

## 8. Check Container Logs

To check the logs of the running container, use the following command:

```sh
docker logs <container_id>
```

## 9. Push Docker Image to Docker Hub
To push the Docker image to Docker Hub:

Log in to Docker Hub:

```sh
docker login
```

Tag the Docker image:

```sh
docker tag node-mongo-api-template:latest <docker_hub_username>/node-mongo-api-template:latest
```

Push the Docker image:

```sh
docker push <docker_hub_username>/node-mongo-api-template:latest
```


## 10. Pull Docker Image from Docker Hub
To pull the Docker image from Docker Hub:

Pull the Docker image:

```sh
docker pull <docker_hub_username>/node-mongo-api-template:latest
```

# Troubleshooting

1. Ensure Docker is installed and running.
2. Verify that the .env file contains the correct environment variables.
3. Check container logs for error messages if something goes wrong:




