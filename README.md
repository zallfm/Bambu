# Bambu

# Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Install MongoDB Community Edition ([instructions](https://docs.mongodb.com/manual/installation/#tutorials)) and run it by executing `mongod`
- `mongo` 
- `show dbs` looking to database
- `use (name database)` 
- `mongoimport -d bambuApi -c people --type csv --file ./bambu/data/data.csv --fields "name.string(),age.int32(),latitude.double(),longitude.double(),monthlyIncome.int32(),experienced.boolean()" --columnsHaveTypes --parseGrace skipRow` import csv to mongodb
- `db.people.find().forEach(function(people){ db.people.update( {_id:people._id},{$set:{score:parseFloat((Math.random() * (1-0) + 0).toFixed(1))}})})` adding random score 0-1
- `npm run start` to start the local server

# Code Overview

## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript 

## Application Structure

- `app.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `config/` - This folder contains configuration for passport as well as a central location for configuration/environment variables.
- `routes/` - This folder contains the route definitions for our API.
- `models/` - This folder contains the schema definitions for our Mongoose models.

## Feature Adding Score
`http://localhost:9999/addscore/(_id)` get value 0,1 example : http://localhost:9999/addscore/5c2cf0fdf5c1dd35aec6b0c9

<br />

