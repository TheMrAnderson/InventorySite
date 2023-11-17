var http = require("http");
require('dotenv').config();

const options = {
	host: "127.0.0.1",
	port: 3000,
	timeout: 2000
};

const healthCheck = http.request(options, (res) => {
	console.log(`Healthcheck Status: ${res.statusCode}`);
	if (res.statusCode == 200) {
		process.exit(0);
	}
	else {
		process.exit(1);
	}
});

healthCheck.on('error', function (err) {
	console.log(`IP/Port Config: ${options}`)
	console.log('Healthcheck Error', err);
	process.exit(1);
});

healthCheck.end();
