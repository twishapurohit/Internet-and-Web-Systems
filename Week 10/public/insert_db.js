var express = require("express");
var app     = express();
var path    = require("path");
var mysql = require('mysql');
var bodyParser = require('body-parser');
var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "twisha961995",
  database: "mydatabase",
  multipleStatements: true
});
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/signUp.html'));
});
app.post('/submit',function(req,res){

  var username=req.body.username;
  var email=req.body.email;
  var password=req.body.password;
  res.write('You sent the username "' + req.body.username+'".\n');
  res.write('You sent the email "' + req.body.email+'".\n');
  res.write('You sent the password "' + req.body.password+'".\n');

  con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO User (UserName, Email, Pword) VALUES ('"+username+"', '"+email+"','"+password+"')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
     res.end();
  });
  });
})
app.listen(3000);
console.log("Running at Port 3000");