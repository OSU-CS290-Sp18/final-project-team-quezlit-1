var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

var mongoHost = process.env.MONGO_HOST || "classmongo.engr.oregonstate.edu";
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER || "cs290_berwicja";
var mongoPassword = process.env.MONGO_PASSWORD || "Quezlit";
var mongoDBName = process.env.MONGO_DB_NAME || "cs290_berwicja";

var mongoURL = 'mongodb://' + mongoUser + ':' + mongoPassword + '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;
var db;

app.get('/', function (req, res, next){
	var flashcardsCursor = db.collection('flashcards').find({});
	flashcardsCursor.toArray(function (err, flashArray) {
		if(err){
			res.status(500).send("Error fetching flashcards from database.");
		}
		else{
			res.status(200).render('homePage', {
				flashcards: flashArray
			});
		}
	});
});

app.post('/addFlash', function (req, res){
	console.log('request body: ', req.body);
	console.log('front: ', req.body.front);
	console.log('back: ', req.body.back);
	if(req.body && req.body.front && req.body.back){
		db.flashcards.insertOne({
			front: req.body.front,
			back: req.body.back
		});
		res.status(200).send('Flashcard upload successful');
	}
	else{
		res.status(400).send('Requests to this path must containt a JSON body with front and back fields.');
	}
});

app.post('/showBack', function (req, res) {
	if(req.body && req.body.front){
		var flashBack = db.flashcards.find({front: req.body.front});
		res.status(200).send(flashBack);
	}
	else{
		res.status(400).send('Requests to this path must contain a JSON body with front field.');
	}
});


	




MongoClient.connect(mongoURL, function (err, client) {
  if (err) {
    throw err;
  }
  db = client.db(mongoDBName);
  app.listen(port, function () {
    console.log("== Server listening on port ", port);
  });
});