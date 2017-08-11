
function login() {

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var user = getElementByName('username').innerHTML;
console.log(user);
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created! with" + user);
  db.close();
});


}

