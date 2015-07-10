"use strict";

var express = require("express"),
	app = express(),
	port = process.env.PORT || 3000;

app.use(express.static("public"));

app.listen(port, function (request, response) {
	console.log("Listening on port " + port);
});