var mysql = require('mysql');

var con = mysql.createConnection({
  host: "162.248.93.113",
  user: "airline_user",
  password: "b^G4D$GDyV%2v7"
});



con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
})