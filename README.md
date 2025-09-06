# Library API

A simple Library Management REST API built with Node.js, Express, and MongoDB.  

---

## Installation & Setup

### Install Dependencies
```bash
npm install express
npm install mongoose
npm install nodemon 
```
### Features Implemented

1.`Add a new book`  
2.`get all books`  
3.`Search book by name or ID`  
4.`Update book by ID`  
5.`Delete book by ID`

### Running the Project

Start the server with:
```bash
npm run server
```
Server will start on http://localhost:5000

### API Endpoints

1. `POST /books → Add a book`    
2. `GET /books → Get all books`      
3. `GET /books/:id → Get a book by ID`    
4. `GET /books/search/:title → Search book by title`  
5. `PUT /books/:id → Update book by ID`    
6. `DELETE /books/:id → Delete book by ID`    