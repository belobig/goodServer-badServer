// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var GOODPORT = 7000;
var BADPORT = 7500;

// Create a generic function to handle requests and responses
function goodHandleRequest(request, response) {

		// Send the below string to the client when the user visits the PORT URL
		response.end("You're awesome!! Path Hit: " + request.url);

}

// Create a generic function to handle requests and responses
function badHandleRequest(request, response) {

		// Send the below string to the client when the user visits the PORT URL
		response.end("You Suck!! Path Hit: " + request.url);

}

// Use the Node HTTP package to create our server. Pass the handleRequest
// function to empower it with functionality.
var goodServer = http.createServer(goodHandleRequest);
var badServer = http.createServer(badHandleRequest);

// Start our server so that it can begin listening to client requests.
goodServer.listen(GOODPORT, function () {

	// Log (server-side) when our server has started
	console.log("Good Server listening on: http://localhost:" + GOODPORT);
});

// Start our server so that it can begin listening to client requests.
badServer.listen(BADPORT, function () {

	// Log (server-side) when our server has started
	console.log("Bad Server listening on: http://localhost:" + BADPORT);
});