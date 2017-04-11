const express = require('express');
const app = express();
const mongoose = require('mongoose')

const router = express.Router()

const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/test').then(() => {

    const userSchema = new Schema({
        name:  String,
    });
    const users = mongoose.model('user1', userSchema);

 app.route('/user')
	.get((req, res)=>{
        User.find().exec().then((posts) => {
            res.send(posts);
        });
	 })
    .post(function (req, res) {
        //res.send('Add a user')
        const user1 = new users({
            name: 'Angela',
		});
        user1.save().then( savedUser => console.log(savedUser)).catch(err => console.log(err))
 		res.json(user1)
	})
    .put(function (req, res) {
        res.send('Update the book')
    })
app.use('/',  (req, res, next)=> {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', (req, res) =>{
	res.render('index');
});

app.get('/person/:id', (req, res) =>{
	res.render('person', { ID: req.params.id });
});

app.get('/api', (req, res) =>{
	res.json({ name: 'John'});
});

app.listen(port);

}, err => {
    console.log('Connection to db faileed: ' + err)
});