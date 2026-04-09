# 🚀 Junior DevOps Portfolio: CI/CD + Docker + AWS EC2

This project demonstrates a simple DevOps workflow for building, deploying, and monitoring a Node.js application using Docker, GitHub Actions, and AWS EC2.

The goal is to show practical understanding of:
- CI/CD pipelines
- Containerized deployment
- Runtime behavior and logging
- Handling failures and recovery

---

## 🎥 Portfolio Videos

### 📌 Video 1 — CI/CD Pipeline & Deployment
https://www.youtube.com/watch?v=hIIBxzOa064
**Focus:** Automated build and deployment

- GitHub Actions pipeline triggered on push
- Docker image build and push to Docker Hub
- Deployment to AWS EC2 via SSH

👉 Shows ability to automate application delivery

---

### 📌 Video 2 — Docker Runtime, Environment Variables & Logging
https://www.youtube.com/watch?v=UvZCi5xdCwU
**Focus:** Runtime behavior and observability

- Application running inside a Docker container on EC2
- `.env` used for configuration
- Logging middleware to track incoming requests
- Viewing logs with `docker logs`

👉 Shows understanding of container runtime and debugging

---

### 📌 Video 3 — CI/CD Failure Handling & Recovery
https://www.youtube.com/watch?v=xE6N9NSrD2Q
**Focus:** Reliability and error handling

- Introduced a deliberate syntax error in the application
- CI/CD pipeline detected the failure using `node app.js`
- Fixed the error and re-ran the pipeline successfully
- Deployed updated container to EC2
- Verified with logs and `/health` endpoint

👉 Shows ability to handle failures and ensure safe deployments

---

## ⚙️ Tech Stack

- **Backend:** Node.js (Express)
- **Containerization:** Docker, Docker Hub
- **CI/CD:** GitHub Actions
- **Cloud:** AWS EC2
- **OS:** Linux (Ubuntu)

---

## 🔄 CI/CD Workflow Overview

1. Code is pushed to GitHub
2. GitHub Actions pipeline runs:
   - Builds Docker image
   - Pushes image to Docker Hub
   - Runs `node app.js` to detect syntax/runtime errors
3. If successful:
   - EC2 pulls the latest image
   - Old container is stopped and removed
   - New container is started

---

## 🧠 Key Takeaways

- CI/CD pipelines should validate code before deployment
- Docker ensures consistent runtime environments
- Logs and health endpoints are essential for monitoring
- Small improvements (env variables, logging, validation) significantly increase reliability

---

## 📎 Notes

This project focuses on clarity and practical understanding rather than complex infrastructure. It is designed as a learning and demonstration project for junior DevOps roles.
