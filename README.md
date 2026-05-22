# SpringChat

A real-time chat application built with Spring Boot and WebSockets, providing instant messaging capabilities with a modern React frontend.

## 🚀 Features

- **Real-time Messaging**: Instant message delivery using WebSockets
- **Chat Rooms**: Create and join multiple chat rooms
- **Responsive UI**: Modern React + Vite frontend with intuitive design
- **Spring Data JPA**: Efficient database operations with ORM
- **Docker Support**: Complete containerization with Docker and Docker Compose

## 🛠️ Tech Stack

### Backend
- **Spring Boot**: Microservice framework
- **Spring WebSocket**: Real-time bidirectional communication
- **Spring Data JPA**: Object-relational mapping and database access
- **Java**: Core programming language

### Frontend
- **React**: UI library
- **Vite**: Build tool and dev server
- **JavaScript/HTML/CSS**: Frontend technologies

### Database
- **MongoDB**: For persisting users, messages, and chat rooms


## 📋 Prerequisites

- Java 11 or higher
- Node.js and npm
- Maven
- Docker and Docker Compose (for containerized deployment)

## 🔧 Installation

### Backend Setup

1. Clone the repository:
```bash
git clone https://github.com/hariom-hub/Websockets-Springboot.git
cd Websockets-Springboot
```

2. Navigate to the backend directory:
```bash
cd SpringChat/ChatingAppBackend
```

3. Build the project:
```bash
mvn clean install
```

4. Run the Spring Boot application:
```bash
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd SpringChat/ChatApp-FrontEnd
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will start on `http://localhost:5173`

## 🐳 Docker Containerization

### Prerequisites for Docker

- Docker
- Docker Compose

### Quick Start with Docker Compose

1. Navigate to the backend directory:
```bash
cd SpringChat/ChatingAppBackend
```

2. Build the backend Docker image:
```bash
mvn clean package -DskipTests
docker build -t chatingapp-backend .
```

3. Run all services with Docker Compose:
```bash
docker-compose up -d
```

This will start:
- **MongoDB**: Running on `mongodb://localhost:27018` (internal: 27017)
- **Backend**: Running on `http://localhost:8081`
- **Frontend**: Running on `http://localhost:5174`

### Docker Compose Services

The `docker-compose.yaml` includes:

```yaml
services:
  mongodb:
    - Image: mongo:7
    - Port: 27018:27017
    - Volume: mongo-data (persists data)
    
  backend:
    - Image: chatingapp-backend
    - Port: 8081:8080
    - Environment: SPRING_DATA_MONGODB_URI=mongodb://mongodb:27017/ChatApp
    - Depends on: mongodb
    
  frontend:
    - Image: node:20-alpine
    - Port: 5174:5173
    - Depends on: backend
```

### Environment Variables

When running with Docker, the backend automatically uses:
- `SPRING_DATA_MONGODB_URI`: `mongodb://mongodb:27017/ChatApp`

### Useful Docker Commands

```bash
# Start services in the background
docker-compose up -d

# View logs
docker-compose logs -f

# View logs for a specific service
docker-compose logs -f backend
docker-compose logs -f mongodb
docker-compose logs -f frontend

# Stop services
docker-compose down

# Stop services and remove volumes
docker-compose down -v

# Rebuild images
docker-compose up -d --build
```

### Building Individual Images

#### Backend Dockerfile

The backend uses a multi-stage approach with Alpine Linux for minimal image size:

```dockerfile
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY target/ChatingAppBackend-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
```

Build command:
```bash
mvn clean package -DskipTests
docker build -t chatingapp-backend .
```

### Network Configuration

All containers communicate through the `chat-net` Docker network:
- Backend connects to MongoDB using hostname `mongodb`
- Frontend connects to backend via Docker network
- External access available through exposed ports

## 💻 Usage

1. Open your browser and navigate to `http://localhost:5173` (local) or `http://localhost:5174` (Docker)
2. Register a new account or login with existing credentials
3. Create a chat room or join an existing one
4. Start messaging in real-time with other users
5. View online status and message history

## 🏗️ Project Structure

```
Websockets-Springboot/
├── SpringChat/
│   ├── ChatingAppBackend/
│   │   ├── src/
│   │   │   ├── main/
│   │   │   │   ├── java/
│   │   │   │   │   └── [Backend Spring Boot code]
│   │   │   │   └── resources/
│   │   │   └── test/
│   │   ├── pom.xml
│   │   ├── Dockerfile
│   │   └── docker-compose.yaml
│   ├── ChatApp-FrontEnd/
│   │   ├── src/
│   │   ├── public/
│   │   ├── package.json
│   │   └── vite.config.js
│   └── README.md
└── README.md
```


## 📚 API Documentation

The backend provides RESTful endpoints for:
- Chat room management
- Message operations

WebSocket connections are available at `/app` endpoint for real-time messaging.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Hariom Hub** - [GitHub Profile](https://github.com/hariom-hub)

## 🔗 Related Projects

- [SpringBoot Projects Repository](https://github.com/hariom-hub/SpringbootProjects)

## 📧 Support

For support, please open an issue on the GitHub repository.

---

**Built with ❤️ using Spring Boot, React, and Docker**
