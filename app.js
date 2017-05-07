/**
 * Created by gadyezra on 4/27/17.
 */

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var main = require('./controller.js');
require('./mongodb/mongoConnect.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port);

app.all('*', function(req,res,next) {
   console.log("logged in");
   req.next();
});

app.get('/getAllUsers', function(req,res) {
    main.getAllUsers(req,res);
});

app.get('/getUserChannels', function(req,res) {
    main.getUserChannels(req,res);
});

app.get('/getAllChannels', function(req,res) {
    main.getAllChannels(req,res);
});

app.post('/addNewChannel', function(req,res) {
    main.addNewChannel(req,res);
});

app.post('/addNewUser', function(req,res) {
    main.addNewUser(req,res);
});

app.get('/getUserChannels/:id', function(req,res) {
    console.log(req.params.id);
    main.getUserChannels(req,res);
});

app.post('/isRegToChannel/:id', function(req,res) {
    main.isRegToChannel(req,res);
});

console.log('listening on port ${port}');