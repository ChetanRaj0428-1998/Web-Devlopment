# Creating a Fake/ Local Backend server using the JSON Server and performing CRUD operations using HTTP requests.

 [Angular CLI] version 10.0.2.

Get a full fake REST API with zero coding in less than 30 seconds (seriously)

## Instal node Modules
Run `npm i` to install the node modules

## Create the JSON Server
Run `npm install -g json-server` to install in the project Directory.

## Start the JSON-Server
Open CMD/Terminal and navigate to project directory and run `json-server --watch db.json` to start the server. 
The server starts running on http://localhost:3000/


## Build and Serve
Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Usage
Perform the CRUD operations.

## Hints

This project uses only one property `Name` in the `db.json` JSON file but you can configure the file and the project to have more properties,

While creating a new JSON file make sure the objects have an `id` property to avoid 500 Error Code.
