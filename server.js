var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/learn');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('nigger');
});

var skillSchema = mongoose.Schema({
    name: String,
    description: String
});

var Skill = mongoose.model('Skill', skillSchema);

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/personnel', function(req, res) {
	res.send({ items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    ]});
});

app.get('/skill', function(req, res) {
	Skill.find({}, function(err, skills) {
		res.send({ success: true, items: skills});	
	});
	
});

app.post('/skill', function(req, res) {
	skill = new Skill(req.body);

	skill.save(function (err, skill) {
		if (err) return console.error(err);

		res.send({success: true, item: skill});
	});
});

app.listen(1842);