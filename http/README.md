# Creating a Fake Backend/ Local Backend Server using JSON-server and using HTTP methods to perform CRUD operation in Angular 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

## After Cloning
Open a terminal and navigate i.e)cd to the project directory then:
Run `npm i` to install the node modules

Run `npm install -g json-server` to install the JSON-server

## Run the JSON server
Run `json-server --watch db.json` and the server will start running on `http://localhost:3000/` .

To check if server is running type this url
`http://localhost:3000`

To check the data in the local db file type this url `http://localhost:3000/data`


## Build and serve the Angular Project
Run `ng serve` to display it on the browser on `http://localhost:4200/`


## Usage
You can perform the Create, Read, Delete and Update operations. There is only one property `Name` in the `db.json` file but you can configure this project and have more properties.

## Hints
While configuring or creating a new data object in the `db.json` file make sure you include `id` with values to perform Create, Delete and Update operations. 

## Resources
https://www.npmjs.com/package/json-server


