var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride('X-HTTP-Method-Override'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.listen(port);
console.log("App listening on port " + port);