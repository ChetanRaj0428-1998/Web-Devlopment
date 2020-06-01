const mongoose = require("mongoose");// to connect the nodejs environment with MongoDB


mongoose.connect("mongodb://localhost:27017/Edureka", { useUnifiedTopology: true, useNewUrlParser: true  } , (error)=>{
    if(!error)
    {
        console.log("Success Connected");
    }
    else{
        console.log("Error Connection Database, Err: "+ error);
    }
});// to create a connection using the url


//import the course model
const Course = require("./courses.model");