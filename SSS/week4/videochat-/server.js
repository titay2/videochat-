var express = require('express');
const https = require('https');
const fs = require('fs');
var app = express();
const config = require('getconfig');


//var port = process.env.PORT || 3000;

app.use(express.static('public'));



const sslkey = fs.readFileSync('ssl-key.pem');
const sslcert = fs.readFileSync('ssl-cert.pem')

const options = {
    key: sslkey,
    cert: sslcert
};


const sockets = require('signal-master/sockets');
// modify this line:
const server = https.createServer(options, app).listen(8888);
// add this to the end of file
sockets(server, config);

//https.createServer(options, app).listen(8888);

/*
app.get('/',function  (req, res)  {
    res.send('Hello Secure World!');
});
*/





//app.listen(port);