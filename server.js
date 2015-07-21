var http = require('http');
var express = require('express');

var app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
    res.send('HEY! Your HTTPS Express Node.js server is working!');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});