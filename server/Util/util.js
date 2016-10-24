module.exports = {
  createFilter: function(queryString) {
    var filter = {};
    filter.string = '';
    // filter.rating = {};

    for (var key in queryString) {
      if (key === 'specialties') {
        filter.string += ' AND b.id in (SELECT bs.id_business_profile ' +
                'FROM Specialties s JOIN Business_specialties bs ' +
                'ON (s.id = bs.id_specialties) ' +
                'WHERE s.name in (' + queryString[key] + '))';
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