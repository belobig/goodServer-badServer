// Require/import the HTTP module
var http = require("http");

var url = require("url");

var BADPORT = 7500;

// Create a generic function to handle requests and responses
function badHandleRequest(request, response) {

	// Send the below string to the client when the user visits the PORT URL
	response.end("You Suck!! Path Hit: " + request.url);

}

var badServer = http.createServer(badHandleRequest);

// Start our server so that it can begin listening to client requests.
badServer.listen(BADPORT, function () {

	// Log (server-side) when our server has started
	console.log("Bad Server listening on: http://localhost:" + BADPORT);
});