var mysql = require('mysql');
var request = require('request'); // You might need to npm install the request module!
var expect = require('chai').expect;

describe('Persistent Node Server', function() {
  var dbConnection;

  beforeEach(function(done) {
    dbConnection = mysql.createConnection({
      user: 'root',
      password: '123',
      database: 'spookyCelluloid'
    });
    dbConnection.connect();

    var tablename = "Business_profile";

    /* Empty the db table before each test so that multiple tests
     * (or repeated runs of the tests) won't screw each other up: */
    dbConnection.query('truncate ' + tablename, done);
  });

  afterEach(function() {
    dbConnection.end();
  });

  it('Should retrieve a list of facilities', function(done) {
    console.log('hello');
    request({
      method: 'GET',
      uri: 'http://127.0.0.1:8080/',
    }, function () {

        var queryString = 'SELECT * FROM Business_profile';

        dbConnection.query(queryString, function(err, results) {
        console.log('results');
          expect(results.length).to.equal(11);
          expect(results[0].facility_name).to.equal('Bancroft Convalescent Hospital');
          done();
        });

      });
    });
});