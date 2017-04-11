const express = require('express');
const app = express();
const route = express.Route();



const port = process.env.PORT || 3000;


app.route('/user/:id')
	.get((req,res)=>{
        res.send('<html><head></head><body><h1>User: ' + req.params.id + '</h1></body></html>');

    })

app.get('/', function(req, res) {
	res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/person/:id', function(req, res) {
	res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});


app.listen(port);