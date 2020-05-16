const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.send("Hello World");
});

app.post("/", (req, res)=>{
    res.send("POST - Hello Edureka!!!");
})

app.post("/test1", (req, res)=>{
    res.send("test 1");
});

app.post("/test2", (req, res)=>{
    res.send("test 2");
});

app.listen("8080", ()=>{
    console.log("Serve is running. . .");
});