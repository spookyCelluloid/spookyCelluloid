var db = require('../db/db_index.js');
var Util = require('../Util/util.js');

module.exports = {
  filter: {
    getFilterList: function(callback) {
      var filterQuery = 'SELECT DISTINCT name FROM Specialties ORDER BY name';

      db.query(filterQuery, function(err, filterList) {
        if (err) {
          console.log('Error with filter query');
          callback(err);
          return;
        }

        callback(null, filterList);
      });
    }
  },

  facility: {

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

            profile.specialties = specialties.map(function(specialty) {return specialty.name;});
            profile.reviews = reviews.filter(function(review) { return review.content !== undefined; });

            callback(null, profile);
          })


        });

      })

    },

    getFacilityList: function(query, callback) {
      var filters = Util.createFilter(query);

      console.log('before query', filters);
      var facilityListQuery = 'SELECT b.id, b.facility_name, b.phone_number, b.street, b.city, b.state, b.zip, b.Medicare, b.image_url, AVG(r.rating) AS average_rating, COUNT(r.rating) AS num_ratings ' +
                              'FROM Business_profile b LEFT JOIN Reviews r ' +
                              'ON (b.id = r.id_business_profile) ' +
                              (filters.string ? 'WHERE ' + filters.string + ' ' : '') +
                              'GROUP BY b.id';

      db.query(facilityListQuery, function(err, listResults) {
        if (err) {
          console.log('err with getFilteredList query');
          callback(err);
          return;
        }

        // remove facilities with rating less than specified
        if (filters.rating) {
          listResults = listResults.filter(function(facility) {
            return (filters.rating.average_rating ? facility.average_rating >= filters.rating.average_rating : true) &&
                   (filters.rating.num_ratings ? facility.num_ratings >= filters.rating.num_ratings : true);
          });
        }

        // queries the db for specialities
        var specialtyQuery = 'SELECT b.id, s.name ' +
                          'FROM Business_profile b, Business_specialties j, Specialties s ' +
                          'WHERE b.id = j.id_business_profile && j.id_specialties = s.id';

        //queries the database for all the specialties
        db.query(specialtyQuery, function(err, specialtyResults) {
          if (err) {
            console.log('err with specialty query', err);
            callback(err);
            return;
          }


          //iterate through the array of facility objects, adds a key called specialities and adds in an array of speciality values
          for (var i = 0; i < listResults.length; i++) {
            listResults[i].specialties = specialtyResults.filter(function(specialty) {
              return specialty.id === listResults[i].id;
            }).map(function(specialty) {
              return specialty.name;
            })
          }

          // filter out facilities that don't have all the specialties
          if (query.specialties) {
            var specialtyList = query.specialties.slice(1, query.specialties.length - 1).split('","');

            listResults = listResults.filter(function(facility) {
              return (specialtyList.every(function(specialty) {
                      return facility.specialties.indexOf(specialty) > -1;
                     }));
            })
          }

          callback(null, listResults);
        });

      });
    }
  }
}








