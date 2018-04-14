// Require/import the HTTP module
var http = require("http");

var url = require("url");

// Define a port to listen for incoming requests
var GOODPORT = 7000;


// Create a generic function to handle requests and responses
function goodHandleRequest(req, res) {

	var urlParts = url.parse(req.url);

	// switch statement that changes based on the URL passed in
	console.log(urlParts.path);
	switch (urlParts.path) {
		// if we are at localhost:7000
		case "/":
			displayRoot(urlParts, req, res);
			break;
			
// if we are at localhost:7000/portfolio
		case "/portfolio":
			portfolio(urlParts, req, res);
			break;

			// if we are at localhost:7000/funstuff
		case "/funstuff":
		funstuff(urlParts, req, res);
		break;

		default:
			break;
	}

}

// This function determines what to display when someone hits the root of the server
function displayRoot(url, req, res) {
	var myHTML = "<html>";
	myHTML += "<body><h1>Home Page</h1>";
	myHTML += "<p>This is my frikkin home page. Welcome.</p>";
	myHTML += "<a href='/portfolio'>Portfolio</a><br>";
	myHTML += "<a href='/funstuff'>Fun Stuff</a>";
	myHTML += "</body></html>";
	res.writeHead(200, { "Content-Type": "text/html" });
	res.end(myHTML);
}
// This function determines what to display when someone hits the /portfolio page of the server
function portfolio(url, req, res) {
	var myHTML = "<html>";
	myHTML += "<body><h1>Portfolio</h1>";
	myHTML += "<p>Here are some of my projects: <a href='https://github.com/belobig'>GitHub</a></p>";
	myHTML += "<a href='/'>Home</a>";
	myHTML += "</body></html>";
	res.writeHead(200, { "Content-Type": "text/html" });
	res.end(myHTML);
}

// This function determines what to display when someone hits the /funstuff page of the server
function funstuff(url, req, res) {
	var myHTML = "<html>";
	myHTML += "<body><h1>Fun Stuff</h1>";
	myHTML += "<p>This is a fun page</p>";
	myHTML += "<a href='/'>Home</a>";
	myHTML += "</body></html>";
	res.writeHead(200, { "Content-Type": "text/html" });
	res.end(myHTML);
}

// Use the Node HTTP package to create our server. Pass the handleRequest
// function to empower it with functionality.
var goodServer = http.createServer(goodHandleRequest);


// Start our server so that it can begin listening to client requests.
goodServer.listen(GOODPORT, function () {

	// Log (server-side) when our server has started
	console.log("Good Server listening on: http://localhost:" + GOODPORT);
});

