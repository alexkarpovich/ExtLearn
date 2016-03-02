var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/learn');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongo: DB connected');
});

var skillSchema = mongoose.Schema({
    name: String,
    description: String
});

var Skill = mongoose.model('Skill', skillSchema);

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/skill', function(req, res) {
	Skill.find({}, function(err, skills) {
		res.send({ success: true, items: skills});	
	});
	
});

app.post('/skill/add', function(req, res) {
	req.body._id = null;

	skill = new Skill(req.body);

	skill.save(function (err, skill) {
		if (err) return console.error(err);

		res.send({success: true, item: skill});
	});
});

app.post('/skill/update', function(req, res) {

});

app.post('/skill/delete', function(req, res) {
	var id = '56d70589c07c4a6454f36c38';
	
	Skill.remove({_id: id}, function(err) {
		err && console.log(err);
		
		res.send({success: true});
	});
});

app.listen(1842);