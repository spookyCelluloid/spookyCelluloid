var db = require('../db/db_index.js');

module.exports = {
  facility: {
    getFacilityList: function(callback) {
      //queries the database for all nursing homes  
      var facilityListQuery = 'SELECT b.id, b.facility_name, b.phone_number, b.street, b.city, b.state, b.zip, b.Medicare, b.image_url, AVG(c.rating) AS average_rating, COUNT(c.rating) AS num_ratings ' + 
                              'FROM Business_profile b JOIN Reviews c ' + 
                              'ON (b.id = c.id_business_profile) ' +
                              'GROUP BY b.id';
                
      db.query(facilityListQuery, function(err, listResults) {
        if (err) {
          console.log('err with getFacilityList query');
          callback(err);
          return;
        }
        //queries the db for specialities
        var ratingQuery = 'SELECT b.id, s.name ' +
                          'FROM Business_profile b, Business_specialties j, Specialties s ' +
                          'WHERE b.id = j.id_business_profile && j.id_specialties = s.id';

        //queries the database for all the ratings 
        db.query(ratingQuery, function(err, ratingResults) {
          if (err) {
            console.log('err with ratingQuery query', err);
            callback(err);
            return;
          }

         
          //iterate through the array of facility objects, adds a key called specialities and adds in an array of speciality values
          for (var i = 0; i < listResults.length; i++) {
            listResults[i].specialites = ratingResults.filter(function(rating) {
              return rating.id === listResults[i].id;
            }).map(function(rating) {
              return rating.name;
            })
          }

          callback(null, listResults);
        });

      });
    },

    getFacilityProfile: function(facilityID, callback) {

      var FacilityProfileQuery = 'SELECT * FROM Business_profile WHERE id = ' + facilityID;

      db.query(FacilityProfileQuery, function(err, business){
        if (err) {
          console.log('Error with getFacilityProfile query');
          callback(err);
          return;
        } 

        var specialtiesQuery = 'SELECT s.name ' +
                               'FROM Specialties s JOIN Business_specialties bs ' +
                               'ON (bs.id_specialties = s.id) ' +
                               'WHERE bs.id_business_profile = ' + facilityID;

        db.query(specialtiesQuery, function(err, specialties) {
          if (err) {
            console.log('error with specialtiesQuery');
            callback(err);
            return;
          }

          var reviewsQuery = 'SELECT r.content, r.date, r.rating, u.first_name, u.last_name ' +
                             'FROM Reviews r JOIN User u ' +
                             'ON (u.id = r.id_User) ' +
                             'WHERE r.id_business_profile = ' + facilityID;

          db.query(reviewsQuery, function(err, reviews) {
            if (err) {
              console.log('error with reviewsQuery');
              callback(err);
              return;
            }

            var profile = business[0];
            
            profile.specialties = specialties.map((specialty) => specialty.name);
            profile.reviews = reviews.filter((review) => review.content !== undefined);

            callback(null, profile);
          })


        });

      })

    }
  }
}