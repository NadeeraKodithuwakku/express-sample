var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var mongoose = require('mongoose');
var Task = require('./api/models/findMyDietModel'); //create model landing here
var bodyParser = require('body-parser');

// mongoose instance connection url connection
var mongoDB = 'mongodb://mitgroup8:1qaz2wsx@ds225375.mlab.com:25375/findmydietdb';
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/findMyDietRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('find my diet RESTful API server started on: '+ port);