# opentelemetry-observability
Application Observability using OpenTelemetry, Prometheus, Grafana and Jaeger.


# Application Observability Using OpenTelemetry

## Project Overview

This project demonstrates application observability using OpenTelemetry, Prometheus, Jaeger, and Grafana.

It uses a sample Node.js microservices application consisting of frontend and backend services.

## Architecture

- Frontend: Node.js and Express
- Backend: Node.js and Express
- Instrumentation: OpenTelemetry SDK
- Telemetry collection: OpenTelemetry Collector
- Metrics: Prometheus
- Distributed tracing: Jaeger
- Visualization: Grafana
- Containerization: Docker and Docker Compose
- Infrastructure: AWS EC2 Ubuntu

## Project Structure

```text
opentelemetry-observability-coe/
├── frontend/
├── backend/
├── otel-collector/
├── prometheus/
├── grafana/
├── docker-compose.yml
└── README.md
```

## Observability Features

- Application request tracing
- Distributed tracing across services
- Metrics collection
- Slow API request simulation
- Error monitoring
- Centralized observability dashboards

## Planned Deployment

The application will be deployed on AWS EC2 using Docker Compose.

## Learning Objectives

- Understand OpenTelemetry architecture
- Implement application instrumentation
- Configure OpenTelemetry Collector
- Monitor application metrics using Prometheus
- Analyze distributed traces using Jaeger
- Build observability dashboards using Grafana
