const express = require('express');
//const urlencoded = require('url');
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json());

// People > /people
//Person/Row >  /people/person
//Perosn/Row/Age  >  /people/person/age

let people = {      people : [{ name:"Chetan" }]      };

app.get("/people", function(req, res){
    //MongoDB
    res.json(people);
    res.end();
});



app.post("/people", function(req, res){
    //MongoDB
    if(req.body && req.body.name)
    {
        people.people.push({name : req.body.name})
    }
   // console.log(req.body.name);
    res.json(people);
    res.end();
});

app.put("/people", function(req, res){
    //MongoDB
    if(req.body && req.body.name)
    {
        people.people.push({name : req.body.name})
    }
   // console.log(req.body.name);
    res.json(people);
    res.end();
});

app.delete("/people", function(req, res){
    //MongoDB
    if(req.body && req.body.name)
    {
        people.people.push({name : req.body.name})
    }
   // console.log(req.body.name);
    res.json(people);
    res.end();
});

app.get("/people/:name/:age", function(req, res){
   
   // console.log(req.body.name);
    res.json({  name: req.params.name   });
    

    res.end();
});

app.listen(3000);