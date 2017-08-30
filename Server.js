var express = require("express"),
    app = express(),
    path = __dirname + '/views/',
    router = express.Router(),
    MongoClient = require('mongodb').MongoClient;


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

MongoClient.connect('mongodb://localhost:27017/Binge', function(err, db) {

  router.get("/",function(req,res){
  if(!err) {
    db.collection('About').find().toArray(function(err, docs) {
        res.render('index', { About: docs } );
    });
  }
  else {
    res.render('index');
  }

    //res.sendFile(path + "index.html");
  });

  router.get("/About",function(req,res){
    res.sendFile(path + "about.html");
  });

  router.get("/Login",function(req,res){
    res.sendFile(path + "login.html");
  });

  router.get("/tv", function(req,res) {
    res.render('tv');
  })

  app.use("*",function(req,res){
    res.sendFile(path + "404.html");
  });

  app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });

});
