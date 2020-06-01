var express =require ('express');// including express
var http = require('http'); 
var fs = require('fs');
var app = express();//creating server using express

var server = http.createServer(app);//creating server using http and express

app.get('/', function(req, res){
    res.send("<h1>Express Works</h1>");
});

app.get('/tasks', function(req, res){
  fs.readFile('./db.json', function(err, data){
       var tasks = JSON.parse(data.toString()).tasks;
    res.json(tasks);
  });
});

server.listen(3000, function(){
    console.log('Server listening to port 3000');
});