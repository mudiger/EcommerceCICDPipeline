# Ecommerce CI/CD Pipeline (https://ecommerce-cicd-pipeline.vercel.app/)
Ecommerce CI/CD Pipeline is a modern e-commerce frontend built with Next.js and TypeScript, showcasing a clean architecture and end-to-end automation through CI/CD. It features an interactive product browsing experience and deploys seamlessly using Vercel, making it a great base for scalable e-commerce solutions.

## Deployment Strategy
Originally, this project was configured to build and push Docker images to **AWS ECR** using GitHub Actions, then deploy containers using **AWS ECS / Fargate**. Here's what the CI/CD flow looked like:

1. Code pushed to GitHub
2. GitHub Actions builds a Docker image
3. Image is pushed to AWS ECR
4. Containers were deployed on AWS infrastructure

However, due to AWS hosting costs, the deployment has been migrated to **Vercel**. You can still find the AWS GitHub Actions workflow in `.github/workflows/docker-push.yml`.

## ⚡ Features
- Dynamic product listing pages and cart functionality
- Route-based navigation with search functionality
- Integrated CI/CD pipeline for streamlined deployment
- Docker support and GitHub Actions workflow for automation
- Fully deployed via Vercel for preview and production environments

## Installation
1. Clone the repository: git clone https://github.com/mudiger/EcommerceCICDPipeline.git
2. Install dependencies: npm install
3. Run locally: npm run dev

## 🔧 Tech Stack
- Next.js 14 (App Router, TypeScript)
- React (Functional Components, Hooks)
- Docker (Containerization)
- GitHub Actions (CI/CD Automation)
- Vercel (Hosting & Preview Deployments)

## Support the Project
If you like this project, give it a star ⭐ on GitHub!

