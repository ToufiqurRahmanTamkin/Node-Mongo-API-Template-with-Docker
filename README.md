# Node Mongo API Template with Docker

## Overview

This project is a Node.js application with MongoDB integration, containerized using Docker.

## Prerequisites

- Node.js (v18.x or later)
- Docker
- Docker Compose (optional but recommended)

## Environment Setup

Create a `.env` file in the root directory with the following content:

<div class="code-block">
  <pre><code id="env-code">MONGO_URI=mongodb://mongo:27017/node-mongo-api
PORT=3000</code></pre>
  <button class="copy-button" onclick="copyToClipboard('#env-code')">📄</button>
</div>

## Docker Commands

### 1. Build Docker Image

To build the Docker image, use the following commands:

**With Docker Compose:**

<div class="code-block">
  <pre><code id="compose-build">docker-compose build</code></pre>
  <button class="copy-button" onclick="copyToClipboard('#compose-build')">📄</button>
</div>

Without Docker Compose:

<div class="code-block">
  <pre><code id="docker-build">docker build -t node-mongo-api-template:latest .</code></pre>
  <button class="copy-button" onclick="copyToClipboard('#docker-build')">📄</button>
</div>

## 2. Run Docker Container

To run the Docker container, use these commands:

With Docker Compose:
<div class="code-block">
  <pre><code id="compose-up">docker-compose up</code></pre>
  <button class="copy-button" onclick="copyToClipboard('#compose-up')">📄</button>
</div>

Without Docker Compose:
<div class="code-block">
  <pre><code id="docker-run">docker run -p 5000:5000 --env-file .env node-mongo-api-template:latest</code></pre>
  <button class="copy-button" onclick="copyToClipboard('#docker-run')">📄</button>
</div>

## 3. Verify Running Containers

To verify that the containers are running, use the following command:

<div class="code-block">
  <pre><code id="docker-ps">docker ps</code></pre>
  <button class="copy-button" onclick="copyToClipboard('#docker-ps')">📄</button>
</div>

## 4. Access the Application

Open your browser or Postman and navigate to http://localhost:5000 to access the application.

## 5. Stop Docker Container

To stop the Docker container, use the following command:

With Docker Compose:
<div class="code-block">
  <pre><code id="compose-down">docker-compose down</code></pre>
  <button class="copy-button" onclick="copyToClipboard('#compose-down')">📄</button>
</div>

Without Docker Compose:
<div class="code-block">
  <pre><code id="docker-stop">docker stop &lt;container_id&gt;</code></pre>
  <button class="copy-button" onclick="copyToClipboard('#docker-stop')">📄</button>
</div>

## 6. Remove Docker Container

To remove the Docker container, use the following command:

<div class="code-block">
  <pre><code id="docker-rm">docker rm &lt;container_id&gt;</code></pre>
  <button class="copy-button" onclick="copyToClipboard('#docker-rm')">📄</button>
</div>

## 7. Rebuild and Run Docker Container After Code Changes

If you make code changes, rebuild and restart the Docker container:

With Docker Compose:
<div class="code-block">
  <pre><code id="compose-up-build">docker-compose up --build</code></pre>
  <button class="copy-button" onclick="copyToClipboard('#compose-up-build')">📄</button>
</div>

Without Docker Compose:
<div class="code-block">
  <pre><code id="docker-build-run">docker build -t node-mongo-api-template:latest .</code></pre>
  <button class="copy-button" onclick="copyToClipboard('#docker-build-run')">📄</button>
</div>

Run the new container:
<div class="code-block">
  <pre><code id="docker-run-new">docker run -p 5000:5000 --env-file .env node-mongo-api-template:latest</code></pre>
  <button class="copy-button" onclick="copyToClipboard('#docker-run-new')">📄</button>
</div>

## 8. Check Container Logs

To check the logs of the running container, use the following command:

<div class="code-block">
  <pre><code id="docker-logs">docker logs &lt;container_id&gt;</code></pre>
  <button class="copy-button" onclick="copyToClipboard('#docker-logs')">📄</button>
</div>

## 9. Push Docker Image to Docker Hub
To push the Docker image to Docker Hub:

Log in to Docker Hub:
<div class="code-block">
  <pre><code id="docker-login">docker login</code></pre>
  <button class="copy-button" onclick="copyToClipboard('#docker-login')">📄</button>
</div>

Tag the Docker image:
<div class="code-block">
  <pre><code id="docker-tag">docker tag node-mongo-api-template:latest &lt;docker_hub_username&gt;/node-mongo-api-template:latest</code></pre>
  <button class="copy-button" onclick="copyToClipboard('#docker-tag')">📄</button>
</div>

Push the Docker image:
<div class="code-block">
  <pre><code id="docker-push">docker push &lt;docker_hub_username&gt;/node-mongo-api-template:latest</code></pre>
  <button class="copy-button" onclick="copyToClipboard('#docker-push')">📄</button>
</div>

## 10. Pull Docker Image from Docker Hub
To pull the Docker image from Docker Hub:

Pull the Docker image:
<div class="code-block">
  <pre><code id="docker-pull">docker pull &lt;docker_hub_username&gt;/node-mongo-api-template:latest</code></pre>
  <button class="copy-button" onclick="copyToClipboard('#docker-pull')">📄</button>
</div>

# Troubleshooting

1. Ensure Docker is installed and running.
2. Verify that the .env file contains the correct environment variables.
3. Check container logs for error messages if something goes wrong:

<div class="code-block">
  <pre><code id="docker-logs-troubleshoot">docker logs &lt;container_id&gt;</code></pre>
  <button class="copy-button" onclick="copyToClipboard('#docker-logs-troubleshoot')">📄</button>
</div>

<script>
function copyToClipboard(element) {
  var temp = document.createElement("textarea");
  temp.value = document.querySelector(element).textContent;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  document.body.removeChild(temp);
}
</script>

<style>
.code-block {
  position: relative;
}

.copy-button {
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
}
</style>