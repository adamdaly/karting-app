//KARTING APP

var express = require("express");
var nunjucks = require('nunjucks');
var mongoClient = require('mongodb').MongoClient;
var	qs = require('qs');
var passwordHash = require('password-hash');

var app = express();


app.use(function(req, res, next){
	var body = '';
	req.setEncoding('utf8');

	req.on('data', function(chunk) { 
		body += chunk;
	});

	req.on('end', function() {
		req.body = qs.parse(body);
		next();
	});
});

// app.use(express.directory(__dirname));

nunjucks.configure('private/views', {
    autoescape: true,
    express: app,
    watch: true
});

//Y6ZuGg66
var database = {
	url: 'mongodb://adamdaly:Y6ZuGg66@ds053597.mongolab.com:53597/karting-app'
}


app.route('/create-event')
.get(function(req, res){

    res.render('base.html', { title: 'Karting App - Create', template: 'partials/view-event-create.html' });
})
// .post(function(req, res){
// 	// TODO: handle creation of event
// }

app.route('/create-user')
.get(function(req, res){

    res.render('base.html', { title: 'Karting App - Create', template: 'partials/view-event-create.html' });
})
.post(function(req, res){
	// TODO: handle creation of event
});


app.route('/')
.get(function(req, res){

    res.render('base.html', { title: 'Karting App', template: 'partials/view-user-login.html' });
})
.post(function(req, res){
	console.log(req.body);
	res.writeHead(200, {"Content-Type": "text/plain"});
  	res.end(JSON.stringify(req.body));
});

// app.post('/database', function(req, res){
// 	mongoClient.connect(database.url, function(err, db) {
// 		if(err) throw err;

// 		var collection = db.collection('sessions');

// 		collection.insert({name: 'Adam Daly', password: 'Password', uid: 'asd123'}, function(err, docs) {

// 			// collection.count(function(err, count) {
// 				// console.log(format("count = %s", count));
// 			// });

// 			// Locate all the entries using find
// 			collection.find().toArray(function(err, results) {
// 				console.dir(results);
// 				// Let's close the db
// 				db.close();

// 				res.writeHead(200, {"Content-Type": "text/plain"});
//   				res.end("Hello World\n");
// 			});
// 		});
// 	});
// });

// used to serve static files such as .css and .js
app.use(express.static(__dirname + '/public'));

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
	console.log("Listening on " + port);
});