//importing modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

//importing routes folder
const route = require('./routes/routes');

//Connect to MongoDB

mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on('connected', (err)=>{
    if(err)
    {
     console.log("Error Connecting to DB, Err: "+err);   
    }
    console.log("Connected to Mongo DB @ 27017");
});


//port no
const port = 3000;

//adding middleware, CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS(Cross-Origin Resource Sharing) with various options.  
//Usage: resources on a web page to be requested from another domain outside the domain from which the first resource was served.
app.use(cors());

//body - parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes will start with /api and will invoke the rest from routes files 
app.use('/api', route);

//testing server
app.get('/', (req, res)=>{
    res.send('foobar');
});

//binding server to port
app.listen(port, ()=>{
    console.log('Server started at port:'+port);
});