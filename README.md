# Disaster Management System
Disaster Management System
Overview
This project is a Generative AI-powered disaster management platform designed to collect, analyze, and visualize real-time and simulated disaster data for effective emergency response. It integrates spatial databases, AI text analysis, predictive modeling, and web-based geospatial dashboards to support rescue coordination and communication.

Features
Real-time data ingestion: Weather, citizen reports, and resource information ingestion and storage using PostgreSQL with PostGIS.

AI Text Analysis: Uses OpenAI GPT-4 for extracting severity, location, urgency, and assistance requests from citizen disaster reports.

Predictive Modeling: Machine learning models (RandomForest) predict disaster impact severity and zones.

Interactive Maps: React.js frontend with Leaflet displays evacuation zones and impact areas using GeoJSON data.

Offline Support: Data caching and synchronization enable functionality during network outages.

Multilingual Alerts: Supports multiple languages with translation JSONs and AI-generated multilingual messages.

Notifications: Multi-channel alerting including SMS, web notifications, and voice alerts.

Role-based Access: Secure JWT authentication with Admin, Rescuer, and Citizen roles.

Containerized Deployment: Docker setup for consistent backend and frontend environments.

Technology Stack
Backend: Python, Flask, PostgreSQL, PostGIS, OpenAI API, scikit-learn

Frontend: React.js, React-Leaflet, Leaflet

Database: PostgreSQL with PostGIS extension for geospatial data

Containerization: Docker

Getting Started
Prerequisites
Node.js and npm (for frontend)

Python 3.11+

PostgreSQL 15+ with PostGIS extension

Docker (optional, for containerized deployment)

Installation
Clone the repository

bash
git clone https://github.com/yourusername/disaster-management-system.git
cd disaster-management-system
Setup backend

bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
pip install -r requirements.txt
Setup PostgreSQL

Install PostgreSQL 15+ with PostGIS.

Create disaster_db and enable PostGIS extension.

Run SQL scripts in backend/database/schema.sql to create tables.

Run backend server

bash
python api/app.py
Setup frontend

bash
cd ../frontend
npm install
npm run dev
Open app

Frontend: http://localhost:5173/ (Vite dev server)

Backend API: http://localhost:5000/

Docker Deployment (optional)
From project root:

bash
docker build -f docker/backend.Dockerfile -t disaster-backend .
docker build -f docker/frontend.Dockerfile -t disaster-frontend .
docker run -p 5000:5000 disaster-backend
docker run -p 3000:3000 disaster-frontend
Project Structure
text
disaster-management-system/
│
├── backend/               # Backend flask app, AI, data ingestion, DB scripts
├── frontend/              # React frontend app
├── data/                  # Raw and processed data, language files, maps
├── docker/                # Dockerfiles for backend and frontend containers
├── docs/                  # User manuals, developer documentation
├── tests/                 # Automated tests for backend and frontend
└── README.md              # This file
