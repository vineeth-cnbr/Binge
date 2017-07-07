var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';


// addictional code
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// the code ends here

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/About",function(req,res){
  res.sendFile(path + "About.html");
});

/*router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});*/

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

/*app.listen(3000,function(){
  console.log("Live at Port 3000");
});*/

app.use(express.static('public'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
