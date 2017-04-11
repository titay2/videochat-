const express = require('express')
const mongoose = require('mongoose')
const app = express();

var port = process.env.PORT || 8888;


mongoose.connect('mongodb://localhost:27017/test').then(() => {
    console.log('Connected successfully.')

		app.use('/assets', express.static(__dirname + '/public'));

		app.set('view engine', 'pug');

		app.get('/', function(req, res) {
		res.render('index', { title: 'Hey', message: 'Hello there!' })
		});

}, err => {
    console.log('Connection to db failed: ' + err)
});





app.listen(port);
