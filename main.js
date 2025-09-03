const express = require("express");
const app = express();
const port = 5000;

const books = require("./router/books.router.js");

app.get("/", (req,res) => {
    res.json({msg: "hello all"});
});


app.use("/books", books);

app.listen(port, (err) => {
    console.log(`server runs on http://localhost:${port}`);
});
