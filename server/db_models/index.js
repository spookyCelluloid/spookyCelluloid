var db = require('../db/db_index.js');

module.exports = {
  facility: {
    getFacilityList: function(callback) {
      var facilityListQuery = 'SELECT b.id, b.facility_name, b.phone_number, b.address, b.Medicare, AVG(c.rating) AS average_rating, COUNT(c.rating) AS num_ratings ' + 
                              'FROM Business_profile b JOIN Comments c ' + 
                              'ON (b.id = c.id_business_profile) ' +
                              'GROUP BY b.id';
      db.query(facilityListQuery, function(err, listResults) {
        if (err) {
          console.log('err with getFacilityList query');
          return;
        }

        var ratingQuery = 'SELECT b.id, s.name ' +
                          'FROM Business_profile b, Business_specialties j, Specialties s ' +
                          'WHERE b.id = j.id_business_profile && j.id_specialties = s.id';

        db.query(ratingQuery, function(err, ratingResults) {
          if (err) {
            console.log('err with ratingQuery query', err);
            return;
          }

          for (var i = 0; i < listResults.length; i++) {
            listResults[i].specialites = ratingResults.filter(function(rating) {
              console.log(rating, listResults[i].id);
              return rating.id === listResults[i].id;
            }).map(function(rating) {
              return rating.name;
            })
          }

          callback(listResults);
        });

      });
    }
  }
}