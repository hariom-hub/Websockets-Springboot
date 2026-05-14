# SpringChat

A real-time chat application built with Spring Boot and WebSockets, providing instant messaging capabilities with a modern React frontend.

## 🚀 Features

- **Real-time Messaging**: Instant message delivery using WebSockets
- **Chat Rooms**: Create and join multiple chat rooms
- **Responsive UI**: Modern React + Vite frontend with intuitive design
- **Spring Data JPA**: Efficient database operations with ORM

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

### DevOps
- **Docker**: Containerization support

## 📋 Prerequisites

- Java 11 or higher
- Node.js and npm
- Maven
- Docker (optional)

## 🔧 Installation

### Backend Setup

1. Clone the repository:
```bash
git clone https://github.com/hariom-hub/Websockets-Springboot.git
cd Websockets-Springboot
```

2. Navigate to the backend directory:
```bash
cd SpringChat
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

## 💻 Usage

1. Open your browser and navigate to `http://localhost:5173`
2. Register a new account or login with existing credentials
3. Create a chat room or join an existing one
4. Start messaging in real-time with other users
5. View online status and message history

## 🏗️ Project Structure

```
Websockets-Springboot/
├── SpringChat/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── [Backend Spring Boot code]
│   │   │   └── resources/
│   │   └── test/
│   ├── pom.xml
│   └── Dockerfile
├── SpringChat/ChatApp-FrontEnd/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🐳 Docker Support

Build and run the application using Docker:

```bash
docker build -t springchat .
docker run -p 8080:8080 springchat
```

## 📚 API Documentation

The backend provides RESTful endpoints for:
- User authentication
- Chat room management
- Message operations
- User status

WebSocket connections are available at `/ws` endpoint for real-time messaging.

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

**Built with ❤️ using Spring Boot and React**
