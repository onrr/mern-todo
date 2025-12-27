# Todo App - Backend (Node.js/Express + MongoDB)

This repository contains the **backend** of a simple Todo application built with Node.js, Express, and MongoDB.  
You can run it **locally** or using **Docker**.

---

## Prerequisites

- Node.js
- Expressjs
- MongoDB (You need MongoDB to run this backend. You can install it locally or use Docker.)  
- Docker (optional)

---

## MongoDB

You need MongoDB to run this backend. You can install it locally or use Docker.

#### Install locally

- Download MongoDB from the official website: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)  
- Follow the installation instructions for your OS.  
- Start MongoDB

---

## Required Packages

Install dependencies:

```bash
npm install
npm install --save-dev nodemon (optional)
```

---

## Running Locally

```bash
npm start    (if you dont use nodemon)
npm run dev  (optional / running with nodemon) 
```

---

## Running with Docker

#### Install Docker
- Download Docker from the official website: [https://www.docker.com/get-started/](https://www.docker.com/get-started/)  
- Follow the installation instructions for your OS. 

#### Install Image
- Pull the backend image from Docker Hub:
```bash
docker pull onrry/todo-app:v1
```
#### Install Mongo Image

- Install mongodb in docker:
```bash
docker pull mongo
```
- Create a Docker network
```bash
docker network create todo-app
```
- Run MongoDB Container
```bash
docker run -d --name mongo --network todo-app mongo
```
- Run the application container
```bash
docker run -d -p 5000:5000 --name todo --network todo-app onrry/todo-app:v1
```
##### Port Mapping Explanation (-p)
```bash
-p 5000:5000
-p <HOST_PORT>:<CONTAINER_PORT>
```
- The application always runs on port 5000 inside the container
- (HOST_PORT) -> Port on your local machine
- (CONTAINER_PORT) -> port inside the container. (The container port must stay 5000)
