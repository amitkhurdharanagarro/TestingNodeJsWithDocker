# Click Counter App

A simple Node.js application that counts the number of button clicks. Built with Express.js and ready to run in Docker.

## Features
- Click counter functionality
- Beautiful responsive UI
- RESTful backend API
- Docker containerization
- Easy to deploy

## Prerequisites
- Node.js 18+ (for local development)
- Docker and Docker Compose (for container deployment)

## Installation

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/amitkhurdharanagarro/TestingNodeJsWithDocker.git
   cd TestingNodeJsWithDocker
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Open your browser and navigate to:
   ```bash
   http://localhost:3000
   ```

## Docker Deployment

### Using Docker Compose (Recommended)
1. Build and run the container:
   ```bash
   docker-compose up --build
   ```
2. Access the application:
   ```bash
   http://localhost:3000
   ```
3. Stop the container:
   ```bash
   docker-compose down
   ```

### Using Docker CLI
1. Build the Docker image:
   ```bash
   docker build -t click-counter-app .
   ```
2. Run the container:
   ```bash
   docker run -p 3000:3000 click-counter-app
   ```
3. Access the application:
   ```bash
   http://localhost:3000
   ```

## Project Structure
```bash
.
├── server.js              # Express.js server
├── package.json           # Node.js dependencies
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose configuration
├── .dockerignore          # Docker ignore file
├── public/                # Frontend HTML
│   └── index.html         # Frontend HTML
└── README.md              # This file
```

## API Endpoints
### GET /
Returns the main HTML page.

### POST /click
Increments the hit counter and returns the current count.
**Response:**
```json
{ "hits": 5 }
```

## Technology Stack
- **Backend:** Node.js, Express.js
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Containerization:** Docker, Docker Compose

## License
ISC