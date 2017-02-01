var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
    log(‘server listening on port:’, server.address().port);
});
