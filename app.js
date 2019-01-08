// import express
let express = require('express');
// initialize the app
let app = express();
// import body parser
let bodyParser = require('body-parser');
// import mongoose
let mongoose = require('mongoose');
// configure bodyparser
app.use(bodyParser.urlencoded ({
    extended: true
}));
app.use(bodyParser.json());

require('./config/database');
require('./models/people');
app.use(require('./routes/index'));

// setup server port
let port = process.env.PORT || 9999;
// launch app to listen port
app.listen(port, function () {
    console.log("Running ApiBambu on port " + port);
});

// ➜ mongoimport -d bambuApi -c people --type csv --file ./project-nodejs/backend-bambu/data/data.csv --fields "name.string(),age.int32(),latitude.double(),longitude.double(),monthlyIncome.int32(),experienced.boolean()" --columnsHaveTypes --parseGrace skipRow
