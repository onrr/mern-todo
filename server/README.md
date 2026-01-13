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
docker pull onrry/mern-todo-server
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
docker run -d -p 5000:5000 --name todo --network todo-app onrry/mern-todo-server
```
##### Port Mapping Explanation (-p)
```bash
-p 5000:5000
-p <HOST_PORT>:<CONTAINER_PORT>
```
- The application always runs on port 5000 inside the container
- (HOST_PORT) -> Port on your local machine
- (CONTAINER_PORT) -> port inside the container. (The container port must stay 5000)

---

## Todo App API Tests

This project contains **API tests** for this backend.

#### 1. Test Scenarios

We wrote tests for **all CRUD operations** of the Todo API:

| HTTP Method | Endpoint           | Tested Scenarios |
|------------|------------------|----------------|
| GET        | `/api/todos`      | Return all todos |
| GET        | `/api/todos/:id`  | Return todo if exists, return 404 if not |
| POST       | `/api/todos`      | Create new todo, return 400 if title missing |
| PATCH      | `/api/todos/:id`  | Update `isCompleted`, return 400 if todo not found |
| DELETE     | `/api/todos/:id`  | Delete todo, return 400 if todo not found |

- Happy path (successful requests) are tested  
- Error path (wrong input, missing data, not found) are also tested

#### 2. Tools

- **Jest** → Test framework to run and organize tests  
- **Supertest** → To send HTTP requests to the API  
- **Node.js** → Backend server 

#### 3. How to run tests

3.1. **Start the server**
```bash
npm start
```

3.2. **Run test file**
```bash
npm test
```
---
