# Todo Application with Spring Boot and React JS

This is a full-stack Todo application built with Spring Boot for the backend and React JS for the frontend. It uses MySQL as the database.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete Todo items.
- **Completion Status**: Mark Todo items as complete or incomplete.
- **Responsive UI**: Modern and responsive user interface for managing todos.

## Technologies Used

- **Backend**:
  - Java
  - Spring Boot
  - Spring Data JPA
  - MySQL

- **Frontend**:
  - React JS
  - Axios (HTTP client for making API calls)
  - Tailwind CSS (for styling)

## Prerequisites

Before running this application, ensure you have the following installed:

- Java Development Kit (JDK)
- Node.js and npm (Node Package Manager)
- MySQL Server

## Setup Instructions

### Backend (Spring Boot)

1. Clone the repository:
```
   git clone https://github.com/your-username/todo-app.git
   cd todo-app/backend
```
2. Set up MySQL database:
    - Create a MySQL database named todo_db.
   
3. Configure MySQL database credentials in application.properties
```
    spring.datasource.url=jdbc:mysql://localhost:3306/todo_db
    spring.datasource.username=your_mysql_username
    spring.datasource.password=your_mysql_password
    spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
```
4. Run the backened Server: 
   
```
       ./mvnw spring-boot:run
```
The backend server will start at http://localhost:8080.

## Frontend (React JS)
1. Navigate to the frontend directory:
```
    cd ../frontend
```   
2. Install dependencies:    
 ``` 
    npm install
 ```
3. Start the React development server:
 ``` 
   npm start
```
  The frontend server will start at http://localhost:3000.

  
4. Open your browser and go to http://localhost:3000 to view the Todo application.

## API Endpoints
- GET /api/todos: Fetch all Todos
- POST /api/todos: Create a new Todo
- PUT /api/todos/{id}: Update an existing Todo
- DELETE /api/todos/{id}: Delete a Todo
- PUT /api/todos/{id}/complete: Mark Todo as complete
- PUT /api/todos/{id}/incomplete: Mark Todo as incomplete

## Screenshots
![Screenshot 2024-07-12 170633](https://github.com/user-attachments/assets/731c1c24-828f-4e37-8d95-82ede5363511)
![Screenshot 2024-07-12 170819](https://github.com/user-attachments/assets/b85044b8-5e90-4965-be42-ce422ba24293)
![Screenshot 2024-07-12 170905](https://github.com/user-attachments/assets/49c846c1-653e-44ca-be42-8ba9fd451b9d)
