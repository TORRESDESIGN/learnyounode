const http = require('http');
var url = require('url');
const port = process.argv[2];

var parseQuery = url => {
	if (url.pathname == '/api/parsetime') {
		return parseTime(new Date(url.query.iso));

	} else if (url.pathname == '/api/unixtime') {
		return unixTime(new Date(url.query.iso));
	} else {
		return 'url endpoint is not valid';
	}
}

var parseTime = time => {
	return { 
		hour: time.getHours(), 
		minute: time.getMinutes(), 
		second: time.getSeconds() 
	};
}

var unixTime = time => {
	return { 
		unixtime: time.getTime() 
	};
}

var server = http.createServer((req, res) => {
	if (req.method == 'GET') {
		res.writeHead(200, { 'content-type': 'application/json' });
		url = url.parse(req.url, true);
		res.end(JSON.stringify(parseQuery(url)));// shows url data now
	} else {
		res.writeHead(400);//Bad request
		res.end();
	}
});
server.listen(port);


/*
Offline Docs: file:///C:/Users/Daniel/AppData/Roaming/npm/node_modules/learnyounode/node_apidoc/

-----------alternate solution--------------

    var http = require('http')
    var url = require('url')

    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime: time.getTime() }
    }

    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result

      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
    
*/