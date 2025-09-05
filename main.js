const express = require("express");
const mongoose = require("mongoose");   
const app = express();
const port = 5000;
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended : true}));
const books = require("./router/books.router.js");
const connectDB = require("./database/db.js");

app.get("/", (req,res) => {
    res.json({msg: "hello all"});
});

connectDB();
app.use("/books", books);

app.listen(port, (err) => {
    console.log(`server runs on http://localhost:${port}`);
});
