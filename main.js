const express = require("express");
const app = express();
const port = 5000;

app.get('/', (req,res) => {
    res.json({msg:'hello all'});
})

app.listen(5000 , (req,res)=>{
    console.log(`server runs on http://localhost:5000`);
})