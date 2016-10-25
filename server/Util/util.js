module.exports = {
  createFilter: function(queryString) {

    if (Object.keys(queryString).length === 0) {
      console.log('this is an empty object');
      return {}; 
    }

    var filter = {};
    filter.string = '';
    // filter.rating = {};

    for (var key in queryString) {
      if (key === 'specialties') {

        // filter.string += ' AND b.id in (SELECT bs.id_business_profile ' +
        //         'FROM Specialties s JOIN Business_specialties bs ' +
        //         'ON (s.id = bs.id_specialties) ' +
        //         'WHERE s.name in (' + queryString[key] + '))';

      } else if (key === 'ownership') {

        filter.string += ' AND b.ownership in (' + queryString[key] + ')';

      } else if (key === 'search') {

        var searchValue = queryString[key].slice(0,1) + '%' + queryString[key].slice(1, queryString[key].length - 2) + '%"';

        filter.string += ' AND (b.city LIKE ' + searchValue + ' OR b.zip LIKE ' + searchValue + ' OR b.facility_name LIKE ' + searchValue + ')';

      } else if (key === 'average_rating' || key === 'num_ratings') {

        filter.rating = filter.rating || {};
        filter.rating[key] = queryString[key];

      } else if (key === 'staff_hr' || key === 'average_years_of_experience') {

        filter.string += ' AND b.' + key + ' >= ' + queryString[key];

      } else if (key === 'capacity' || key === 'cost_per_day') {

        filter.string += ' AND b.' + key + ' <= ' + queryString[key];
      
      } else {
      
        filter.string += ' AND b.' + key + ' = ' + queryString[key];
      
      }
    }

    filter.string = filter.string.slice(5);

    console.log('string ===>', filter.string);
    console.log('rating ===>', filter.rating);

    return filter;
  }
};