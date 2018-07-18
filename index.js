var http = require('http');
var mysql= require('mysql');
var url = require('url');
var fs = require('fs');
//var CALLBACK = require('CALLBACK'); 
const concat = require('concat-stream');
const qs = require('querystring');
var db = require('./dbConnect');
var post = require('./postAndGetMethod');

http.createServer(function (req, res) {		
	console.log(post.getRequests(req));
	var objParam=post.getRequests(req);
	
	if(objParam.action=="login" && objParam.username!="" && objParam.password!=""){
		res.writeHead(200, { 'Content-Type': 'application/json'});
		var arrDataSet;
		db.getQuery("SELECT count(*)CNT FROM `users` WHERE user_name='"+objParam.username+"' and user_pass='"+objParam.password+"'",function(result){																																						
			arrDataSet=JSON.parse(result);
			if(arrDataSet[0].CNT==1){
				console.log(arrDataSet[0].CNT);
				db.getQuery("SELECT * FROM `users` WHERE user_name='"+objParam.username+"' and user_pass='"+objParam.password+"'",function(result){																																	  					arrDataSet=JSON.parse(result);																																																																													  					resultData={"DATA":arrDataSet[0],"ISDONE":1};
					res.end(JSON.stringify(resultData));		
				});
			}else{
					resultData={"DATA":null,"ISDONE":0};
					res.end(JSON.stringify(resultData));
			}
		});
	}else if(objParam.action=="getDesignation"){
		db.getQuery("SELECT * FROM `designation`",function(result){
			res.writeHead(200, { 'Content-Type': 'application/json'});
			res.end(result);
										
		});
	}else if(objParam.action=="getDesignation"){
		db.getQuery("SELECT * FROM `designation`",function(result){
			res.writeHead(200, { 'Content-Type': 'application/json'});
			res.end(result);
										
		});
	}else if(objParam.action=="getEmployee"){
		db.getQuery("SELECT * FROM emp",function(result){
			res.writeHead(200, { 'Content-Type': 'application/json'});
			res.end(result);					
		});
	}else if(objParam.action=="getDescription"){
		db.getQuery("SELECT * FROM detail",function(result){
			res.writeHead(200, { 'Content-Type': 'application/json'});
			res.end(result);					
		});
	}else if(objParam.action=="getAllAmounts"){
		db.getQuery("SELECT * FROM amounts",function(result){
			res.writeHead(200, { 'Content-Type': 'application/json'});
			res.end(result);					
		});
	}
	
	else{
		res.writeHead(200, { 'Content-Type': 'application/json'});
		res.end();
		//db.getQuery("select * from emp",res);
	}
}).listen(8082); 

