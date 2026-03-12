# What?

POC NestJS, Next.js, and PostgreSQL.

---

## Prerequisites

- Node.js 20+
- PostgreSQL 16+ (local) or Docker

---

## Environment Setup

The project requires three `.env` files. Create each one before running anything.

### Root `.env`
Used by Docker Compose to configure the database and shared vars.
```env
DB_USERNAME=postgres
DB_PASSWORD=yourpassword
DB_DATABASE=movies

FRONTEND_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### `backend/.env`
```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=yourpassword
DB_DATABASE=movies

JWT_SECRET=your-jwt-secret
PORT=3001
```

### `movie-fe/.env.local`
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

---

## Running Locally

### 1. Install dependencies
```bash
# Backend
cd backend
npm install

# Frontend
cd ../movie-fe
npm install
```

### 2. Configure PostgreSQL

Make sure PostgreSQL is running locally and the credentials in `backend/.env` match your setup. Create the database if it doesn't exist:
```bash
psql -U postgres -c "CREATE DATABASE movies;"
```

### 3. Run migrations
```bash
cd backend
npm run migration:run
```

### 4. Seed the database
```bash
cd backend
npm run db:seed
```

### 5. Start the backend
```bash
cd backend
npm run start:dev
```

### 6. Start the frontend
```bash
cd movie-fe
npm run dev
```

The app will be available at **http://localhost:3000** and the API at **http://localhost:3001**.

---

## Running with Docker

### 1. Start all services

From the project root:
```bash
docker compose up --build
```

This starts PostgreSQL, runs migrations automatically, and starts both the API and frontend.

### 2. Seed the database

Once the containers are running, seed from a separate terminal:
```bash
docker exec movies_api npm run db:seed
```

The app will be available at **http://localhost:3000**.

### Useful Docker commands
```bash
# Stop all containers
docker compose down

# Stop and wipe the database volume
docker compose down -v

# Rebuild a single service
docker compose up --build api

# View logs
docker compose logs -f api
```

---

## Project Structure
```
/
├── backend/          # NestJS API
├── movie-fe/         # Next.js frontend
├── docker-compose.yml
└── .env
```