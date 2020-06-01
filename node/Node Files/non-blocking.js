var fs = require('fs');
// since this a asynchronous we need a callback function which executes after file read is complete
fs.readFile('text.txt', function(err, data){
    if(err){
    console.log(err);
    }
    //setTimeout() executes a one time callback after a duration of specified milliseconds
    setTimeout(()=>{
        console.log('Display After 2 seconds \n', data.toString());
    }, 2000);
});//this function displays the data or the error if any  

console.log('Start Here');  

//Observation: 'Start Here' will execute in b/w the reading of the text.txt file while it completes its reading operation