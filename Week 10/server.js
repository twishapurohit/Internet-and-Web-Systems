var express = require("express");
var app     = express();
var path    = require("path");
var mysql = require('mysql');
var bodyParser = require('body-parser');
var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

 
/*var login=require('./login');
var insert_db=require('./insert_db');*/
var con = require('./config'); 
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
 
 
 
/* route to handle login and registration */
/*app.post('/api/insert_db',insert_db.insert_db); */
/* app.post('/api/login',login.login);*/
 

app.listen(8080);
console.log("Running at Port 8080");
