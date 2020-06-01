//Configure the sql connection
const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Chetan@1",
    database : "mydb",
});


//Make the connection
mysqlConnection.connect((err)=>{
    if(!err)
    {
        console.log("Connected");
    }

    else{

        console.log("Connection Failed err:"+ err );
    }
});

module.exports = mysqlConnection;