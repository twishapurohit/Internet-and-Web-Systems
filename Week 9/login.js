var express = require("express");
var app     = express();
var path    = require("path");
var mysql = require('mysql');
var bodyParser = require('body-parser');

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var con = require('./config');


module.exports.login=function(req,res){

    var username=req.body.username;
    var password=req.body.password;
  
    con.connect(function(err) {
    if (err) throw err;

    con.query('SELECT UserName, Pword from User where UserName = ?', username, function (err, result,feilds) {
        if (err) {
            res.json({
              status:false,
              message:'there are some error with query'
              })
        }
        else{
         
            if(result.length >0){
                
                if(password==result[0].Pword){
                  res.json({
                      status:true,
                      message:'successfully authenticated'
                  })
              }
              else{
                  res.json({
                    status:false,
                    message:"Email and password does not match"
                   });
              }
            
          }
            else{
            res.json({
                status:false,    
              message:"Email does not exits"
            });
        }
    }
    });
    });
  }
