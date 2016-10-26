import React from 'react';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import App from './App';
import SearchLandingPage from './SearchLandingPage';
import SearchForm from './SearchForm';
import FacilityProfile from './FacilityProfile';


const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={SearchForm} />
      <Route path='searchResults' component={SearchLandingPage} />
      <Route path='FacilityProfile' component={FacilityProfile} />
    </Route>
  </Router>
);

export default routes;

 