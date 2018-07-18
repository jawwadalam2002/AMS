var http = require('http');
var mysql = require('mysql'); 
//var CALLBACK = require('CALLBACK'); 
const concat = require('concat-stream');
const qs = require('querystring');
var host="127.0.0.1";
var user="root";
var pass="Karachi123#";
var db="ams";

var conn={
	connections:function(){
		var con1 = mysql.createConnection({ 
			host: host,
			user: user,
			password: pass,
			database: db
		});
		return con1;
	}
};

exports.getQuery = function (sql,callback) {
	
	var con=conn.connections();
	var arrData=[];
	con.connect(function(err) {
		if (err) throw err;
		//console.log("DB CONNECTED");
		con.query(sql, function (err, result, fields) {
			//if (err) throw err;
			arrData=JSON.stringify(result);
			if(arrData){
				//res.end(arrData);	
				return callback(arrData);
				//return arrData.toString();
			}else{
				return "[]";
			}
		});
	});
	
	
	//console.log(arrData);
	return arrData;
}; 