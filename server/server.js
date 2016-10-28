var express = require('express');
var parser = require('body-parser');
var db = require('./db/db_index.js');
var model = require('./db_models/index.js');
var app = express();


app.use(parser.json());
app.use(function(req, res, next) {
  console.log(req.method + ' on ' + req.url);
  next();
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.get('/', function(req, res) {
  var queryString = req.query;
  model.facility.getFacilityList(queryString, function(err, results) {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  })
});

app.get('/facility', function(req, res) {
  var facilityID = req.query.id;

  model.facility.getFacilityProfile(facilityID, function(err, results) {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  })
});

app.get('/getFilterList', function(req, res) {

  model.filter.getFilterList(function(err, results) {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
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

