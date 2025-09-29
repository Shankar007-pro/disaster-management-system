Disaster Management System — Detailed README
Project Overview
The Disaster Management System is a comprehensive, Generative AI-powered platform designed for real-time disaster monitoring, response coordination, and post-disaster recovery assistance. This system integrates geospatial data management, AI-based text analysis, predictive analytics, and interactive web mapping to empower governments, NGOs, and citizens in disaster scenarios.

Key Features
Real-Time Data Ingestion:
Collects live weather reports, citizen-generated alerts, and rescue resource data into a spatially enabled PostgreSQL database (PostGIS).

AI-Powered Text Analysis:
Uses OpenAI GPT-4 models to automatically analyze citizen reports, extracting severity levels, precise locations, urgency, and types of requests, supporting multilingual inputs.

Predictive Modeling:
Employs machine learning models to forecast impact severity and generate risk zones using historical and real-time data.

Interactive Dashboard:
React.js frontend with React-Leaflet for interactive evacuation and disaster impact maps, supporting real-time updates and offline caching for resilience.

Multilingual Support & Alerts:
Provides alerts and UI translations leveraging JSON-based language files and dynamic AI-generated messages to serve diverse linguistic populations.

Offline Operation & Sync:
Maintains local caches of critical data to function during network outages and syncs automatically once connectivity is restored.

Role-Based Access Control (RBAC):
Implements secure JWT authentication with roles for Admins (policy makers/NGOs), Rescuers, and Citizens to ensure data and operation integrity.

Multi-Channel Notifications:
Supports emergency SMS, web push, and voice alerts, with queued delivery during outages, to maximize communication reach.

Containerized Deployment:
Uses Docker to package and deploy backend and frontend applications consistently across various environments.

Technology Stack
Backend: Python, Flask REST API, OpenAI GPT-4 integration, scikit-learn machine learning, psycopg2 for PostgreSQL

Database: PostgreSQL 15+ with PostGIS extension for geospatial support

Frontend: React.js, React-Leaflet, Leaflet.js for spatial mapping

Languages: Python 3.11+, JavaScript (ES6+), JSON for configurations and data

Deployment: Docker containers for backend and frontend

System Architecture
Data Layer:
Spatial disaster and citizen data stored in PostGIS-enabled PostgreSQL tables with geospatial indexing enabling efficient spatial queries.

AI Layer:
ChatGPT (GPT-4) processes citizen text reports to identify severity, location, urgency, types of needs and generates multi-language alerts.

Prediction Layer:
Historical and live datasets feed scikit-learn models forecasting disaster severity for proactive resource allocation.

Backend API:
Flask app exposes RESTful endpoints for frontend data consumption, AI report analysis, data ingestion, and synchronization.

Frontend:
User-friendly React dashboard displays maps, alerts, reports; provides forms for citizen inputs; supports multi-language selection and offline data caching.

Notification System:
Integrates multi-channel emergency communication including SMS modems, web push notifications, and recorded voice alerts.

Getting Started
Prerequisites
Install PostgreSQL 15+ with PostGIS enabled.

Install Python 3.11+ and Node.js (v18+ recommended).

Docker installed for containerized deployment.

Installation Steps
Clone the Repository

bash
git clone https://github.com/yourusername/disaster-management-system.git
cd disaster-management-system
Backend Setup

bash
cd backend
python -m venv venv
source venv/bin/activate       # Windows: .\venv\Scripts\activate
pip install -r requirements.txt
Database Setup

Create PostgreSQL database:

sql
CREATE DATABASE disaster_db;
\c disaster_db
CREATE EXTENSION postgis;
Run SQL schema scripts located in backend/database/schema.sql to create tables.

Run Backend Server

bash
python api/app.py
Frontend Setup

bash
cd ../frontend
npm install
npm run dev
Open Application

React app accessible at http://localhost:5173

Backend API at http://localhost:5000

Docker Deployment
Run the following commands in project root for containerized deployment:

bash
docker build -f docker/backend.Dockerfile -t disaster-backend .
docker build -f docker/frontend.Dockerfile -t disaster-frontend .

docker run -p 5000:5000 disaster-backend
docker run -p 3000:3000 disaster-frontend
Directory Structure
text
disaster-management-system/
├── backend/
│   ├── api/                   # Flask API endpoints
│   ├── models/ai_text_analysis/ # AI text analysis scripts
│   ├── data_processing/       # Data ingestion & preprocessing scripts
│   ├── database/              # DB schema and connection scripts
│   ├── offline_cache/         # Offline data caching handlers
│   └── requirements.txt       # Backend Python dependencies
├── frontend/
│   ├── public/                # Static files & assets
│   ├── src/                   # React source code & components
│   ├── package.json           # Frontend npm dependencies
│   └── README.md
├── data/
│   ├── raw/                   # Raw weather, reports JSON, CSVs
│   ├── processed/             # Cleaned/preprocessed data
│   ├── maps/                  # GeoJSON and shapefiles for maps
│   └── lang_translation/      # JSON translation files
├── docker/                    # Dockerfiles for backend/frontend
├── docs/                      # User manuals and developer docs
├── tests/                     # Backend/frontend unit and integration tests
└── README.md                  # Project overview and instructions
