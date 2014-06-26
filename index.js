//KARTING APP

var express = require("express");
var morgan = require("morgan");
var nunjucks = require('nunjucks');
var MongoClient = require('mongodb').MongoClient;
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
var	qs = require('qs');
var _ = require('lodash');
var passwordHash = require('password-hash');
var uuid = require('node-uuid');
var cookieParser = require('cookie-parser');


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

app.use(cookieParser());

// app.use(morgan());


nunjucks.configure('private/views', {
    autoescape: true,
    express: app,
    watch: true
});

// live
var database = {
	url: 'ds053597.mongolab.com',
	port: 53597,
	username: 'adamdaly',
	password: 'Y6ZuGg66'
};

//dev
// var database = {
// 	url: 'mongodb://127.0.0.1',
// 	port: 27017,
// 	username: 'adamdaly',
// 	password: 'Y6ZuGg66'
// }


var server = new Server(database.url, database.port, {auto_reconnect : true}, {w:0, native_parser: false});
var db = new Db('karting-app', server, {safe:true});

var users, sessions;

db.open(function(error, client) {
	if(error) { return console.dir(error); }
	client.authenticate(database.username, database.password, function(error, success) {
		if(error) { return console.dir(error); }
		if(success) { 
			users = client.collection('users');
			sessions = client.collection('sessions')
		}
	});
});

app.route('/create-event')
.get(function(req, res){

    res.render('base.html', { title: 'Karting App - Create event', template: 'partials/view-event-create.html' });
});
// .post(function(req, res){
// 	// TODO: handle creation of event
// }

app.route('/create-user')
.get(function(req, res){

    res.render('base.html', { title: 'Karting App - Create user', template: 'partials/view-user-create.html' });
})
.post(function(req, res){
	// TODO: handle creation of user

	var userDetails = req.body;

	console.log(userDetails);

	users.findOne({name: userDetails.userName}, function(error, item){
		if(error) { return console.dir(error); }

		if(!!item){
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(JSON.stringify({error: "user exists"}));

		}else{
			userDetails.hashPassword = passwordHash.generate(userDetails.userPassword);
			userDetails.uuid = uuid.v1();
			users.insert({username: userDetails.userName, password: userDetails.hashPassword, uuid: userDetails.uuid}, function(error, docs) {

				res.writeHead(200, {"Content-Type": "application/json"});

			  	res.end(JSON.stringify({success: "user created", data: req.body}));

			});
		}
	});
});


app.route('/login')
.get(function(req, res){

	// res.writeHead(200, {"Content-Type": "text/html"});
    res.render('base.html', { title: 'Karting App', template: 'partials/view-user-login.html' });
    // res.end('debug');


})
.post(function(req, res){

	var userDetails = req.body;

	users.findOne({username: userDetails['user-name']}, function(error, item){
		if(error) { return console.dir(error); }

		if(!!item){

			if(passwordHash.verify(userDetails['user-password'], item.password)){

				// TODO Create and return session data
				// if(!!userDetails.remember){
					// store session

					var sessionData = {
						username: item.username,
						password: item.password,
						token: uuid.v1()
					};

					console.dir(sessionData);

					sessions.insert(sessionData, function(error, docs) {
						if(error) { return console.dir(error); }

					  	res.cookie('username', sessionData.username);
						res.cookie('password', sessionData.password);
						res.cookie('token', sessionData.token);

						res.writeHead(200, {"Content-Type": "application/json"});
					  	res.end(JSON.stringify({success: "session created"}));

					});

				// }else{

				// 	// dont store session
				// 	res.writeHead(200, {"Content-Type": "application/json"});
				// 	res.end(JSON.stringify({success: "login successful - no session", data: {}}));
				// }

			}else{
				res.writeHead(200, {"Content-Type": "application/json"});
				res.end(JSON.stringify({error: "password incorrect"}));
				
			}

		}else{
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(JSON.stringify({error: "no such user"}));
			
		}
	});
			
});


app.route('/')
.get(function(req, res){

	// TODO check login session status
	cookieDetails = {
		username: req.cookies.username,
		password: req.cookies.password,
		token: req.cookies.token
	}
		
	if(cookieDetails.username){


		sessions.findOne({username: cookieDetails.username}, function(error, session){
			if(error) { return console.dir(error); }
			//session = session from db

			if(!!session){

				if(cookieDetails.username === session.username
					&& cookieDetails.password === session.password
					&& cookieDetails.token === session.token){

					console.log('cookie approved');
					var newSession = {
						username: cookieDetails.username,
						password: cookieDetails.password,
						token: uuid.v1()
					};

					sessions.insert(newSession, function(error, session){
						if(error) { return console.dir(error); }

						
						sessions.remove({token: cookieDetails.token}, function(error, sessions){
							if(error) { return console.dir(error); }

							console.log('old session token', cookieDetails.token);
							console.log('new session token', newSession.token);

							res.cookie('username', newSession.username);
							res.cookie('password', newSession.password);
							res.cookie('token', newSession.token);

							// res.writeHead(200, {"Content-Type": "text/html"});
						    res.render('base.html', { title: 'Karting App', template: 'partials/view-index.html' });
						});
					});

				}else{
					sessions.remove({token: cookieDetails.token}, function(error, sessions){
						if(error) { return console.dir(error); }

						console.log('cookie details didn\'t match session details');
						res.redirect('/login');
					});
				}
			}else{
				res.redirect('/login');
			// 	userDetails.hashPassword = passwordHash.generate(userDetails.userPassword);
			// 	userDetails.uuid = uuid.v1();
			// 	users.insert({name: userDetails.userName, password: userDetails.hashPassword, uuid: userDetails.uuid}, function(error, docs) {

			// 		res.writeHead(200, {"Content-Type": "application/json"});

			// 	  	res.end(JSON.stringify({success: "user created", data: req.body}));

			// 	});
			}
		});
				
	}else{
		res.redirect('/login');
	}
})
.post(function(req, res){
	console.log(req.body);
	res.writeHead(200, {"Content-Type": "application/json"});
  	res.end(JSON.stringify(req.body));
});


// used to serve static files such as .css and .js
app.use(express.static(__dirname + '/public'));

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
	console.log("Listening on " + port);
});