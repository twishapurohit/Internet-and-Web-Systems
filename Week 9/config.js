var mysql      = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "twisha961995",
    database: "mydatabase",
    multipleStatements: true
  });

  con.connect(function(err){
    if(!err) {
        console.log("Database is connected");
    } else {
        console.log("Error while connecting with database");
    }
    });
    module.exports = con; 
    