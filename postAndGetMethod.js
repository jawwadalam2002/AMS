var url = require('url');
qs = require('querystring');
exports.getRequests=function(req){
	if(req.method=='POST') {
		var body='';
		req.on('data', function (data) {
			body +=data;
		});
		req.on('end',function(){
			var POST =  qs.parse(body);
			console.log(POST);
			return POST;
		});
	}
	else if(req.method=='GET') {
		var url_parts = url.parse(req.url,true);
		return url_parts.query;
	}
}
