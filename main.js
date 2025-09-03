const express = require("express");
const app = express();
const port = 5000;

const books = require("./route/books.route.js");

app.get("/", (req,res) => {
    res.json({msg: "hello all"});
});


app.use("/books", books);

app.listen(port, (err) => {
    console.log(`server runs on http://localhost:${port}`);
});
