const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

fs.readFile("./index.html", function(err, html){
	const server = http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.write(html);
		res.end();
	  });
	  
	  server.listen(port, hostname, () => {
		console.log(`Server running at http://${hostname}:${port}/`);
	  });
});
