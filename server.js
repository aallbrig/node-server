var express = require("express");
var app = express();
var data = ["ABC","123"]

/* serves main page */
app.get("/", function(req, res) {
  res.sendfile('index.html')
  // res.write(data);
});

app.post("/user/add", function(req, res) { 
	/* some server side logic */
  res.send("OK");
});

/* serves all the static files */
app.get(/^(.+)$/, function(req, res){ 
  console.log('static file request : ' + req.params);
  res.sendfile( __dirname + req.params[0]); 
});

var port = process.env.PORT || 5050;
app.listen(port, function() {
	console.log("Listening on " + port);
});