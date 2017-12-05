var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('server/public'));

app.listen(port, function () {
    console.log('server is listening on port', port);
});