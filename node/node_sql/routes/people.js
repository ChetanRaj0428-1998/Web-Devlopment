const express = require('express');
const Router = express.Router();//Creating a router object for all the routes
const mysqlConnection = require("../connection");

//defining GET and its handler
Router.get("/", (req, res)=> {

mysqlConnection.query("INSERT INTO `mydb`.`people` (`name`, `age`) VALUES ('Bali', '22')", (err)=>{
    if(!err)
    {
        console.log("New Record Inserted");
    }

    else
    {
        console.log(err);
    }
} );

    mysqlConnection.query("SELECT * from people", (err, rows, fields)=>{

        if(!err)
        {
            res.send(rows);
        }

        else{
            console.log(err);
        }
    });
});

module.exports = Router;