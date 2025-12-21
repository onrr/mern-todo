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

#### Install docker
- Download Docker from the official website: [https://www.docker.com/get-started/](https://www.docker.com/get-started/)  
- Follow the installation instructions for your OS.  
- Install mongodb in docker:
```bash
docker pull mongo
docker run -d -p 27017:27017
```

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
- Pull the backend image from Docker Hub:
```bash
docker pull onrry/todo-app:v1
```
- Run backend container:
```bash
docker run onrry/todo-app:v1
```

