var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser  = require('body-parser');

var app = express();
var statesSchema = {
  name: String,
  zipcode: String,
  webpage: String
};

mongoose.connect('mongodb://localhost/StateDetail');
var states = mongoose.model('states', statesSchema, 'state');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/state', function (req, res) {
  console.log('Finding state with filter: ', req.query);
  states.find({}, function (err, doc) {
    res.send(doc);
  });
});

app.get('/state/:id', function (req, res) {
  console.log('Finding states with ID: ', req.params.id);
  states.findById(req.params.id, function (err, foundDocument) {
    res.send(foundDocument);
  });
});

app.post('/state', function (req, res) {
  console.log('Creating states: ', req.body);
  new states(req.body).save(function (err, doc) {
    res.send(doc);
  });
});

app.delete('/state/:id', function(req, res){
  console.log('Deleting states with ID: ' + req.params.id);
  states.remove({_id: req.params.id}, function (err, doc) {
    res.send(doc);
  });
});

app.listen(3000);