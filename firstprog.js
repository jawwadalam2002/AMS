var http = require('http');
var mysql= require('mysql');
var mathsFunc = require('./mathFunc');
var url = require('url');
var fs = require('fs');
var db = require('./dbConnect');
//var dbObj=db.getQuery("select * from emp");
http.createServer(function (req, res) {
    /*
	// ------------------------- URL PARSING AND SERVER CREATIONS -------------------------
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("this is the result of math function "+mathsFunc.myAddFunction(5,10)+"<br>");
	res.write(req.url);
	
	var q = url.parse(req.url, true).query; // toparse url
	
	res.write("H:"+q.h+" <br> B:"+q.b);
    res.end();
	*/
	// -------------------- FILES CALLING ----------------------------------
	
	/*fs.readFile('./htmlFiles/helloWorld.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		//res.end();
	});
	*/
	
		//create a file named mynewfile1.txt:
	/*fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
	  if (err) throw err;
	  console.log('Saved!');
	});*/
	
	//var dbCon=db.getConnect();
	
	
	//res.writeHead(200, {'Content-Type': 'application/json charset=utf-8'});
	//console.log(dbObj);
	//res.write(dbObj);
	
	//res.writeHead(200, {'Content-Type': 'text/html'});
	//res.writeHead(200, { 'Content-Type': 'application/json'});
	//res.setHeader("Content-Type", "application/json");
	//res.setHeader('Content-Type', 'text/html');
	//console.log(dbObj);
	//res.write(dbObj);
	res.writeHead(200, { 'Content-Type': 'application/json'});
	//console.log(JSON.stringify(dbObj));
	db.getQuery("select * from emp",res);
	
	//res.end(jso);
	
}).listen(8082); 

