var express = require('express');
var parser = require('body-parser');
var app = express();



app.use(parser.json());



app.get('/', function(req, res) {
  res.send('hello');
});

app.post('/', function(req, res) {
  res.send('post hello');
});



var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('listening on port ' + port);
});
