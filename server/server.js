var express = require('express');
var parser = require('body-parser');
var db = require('./db/db_index.js');
var model = require('./db_models/index.js');
var app = express();



app.use(parser.json());



app.get('/', function(req, res) {
  model.facility.getFacilityList(function(err, results) {
    if (err) {
      res.statusCode(500).end();
    } else {
      res.json(results);
    }
  })
});

app.post('/businessprofile', function(req, res) {
  var ownership = req.body.ownership;
  var dietary_options = req.body.dietary_options;
  var social_events = req.body.social_events;
  var number_of_staff = req.body.number_of_staff;
  var capacity = req.body.capacity;
  var Medicare = req.body.Medicare;
  var average_years_of_experience = req.body.average_years_of_experience;
  var facility_name = req.body.facility_name;
  var description = req.body.description;
  var data = {
    ownership: ownership,
    dietary_options: dietary_options,
    social_events: social_events,
    number_of_staff: number_of_staff,
    capacity: capacity,
    Medicare: Medicare,
    average_years_of_experience: average_years_of_experience,
    facility_name: facility_name,
    description: description
  }

  connection.query('SELECT * from Business_profile', function(err, rows, fields) {
    res.json(data);
  });

});



var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('listening on port ' + port);
});

