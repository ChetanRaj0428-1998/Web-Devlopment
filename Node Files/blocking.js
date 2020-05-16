var fs= require('fs');//importing file system module for nodejs dependancies
var data = fs.readFileSync('text.txt');//Function to read a file synchronously and storing in variable data
console.log(data.toString());// printing the data
console.log('End Here');

// 'End Here' has to wait for its execution till the text.txt fill completes the read and print operation