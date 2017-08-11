var express = require("express");
var app = express();
var path = __dirname + '/views/';
var router = express.Router();


// addictional code
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));



// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// the code ends here

app.use("/",router);

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/About",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/Login",function(req,res){
  res.sendFile(path + "login.html");
});


app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
