import React from 'react';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import App from './App';
import SearchLandingPage from './SearchLandingPage';
import FacilityProfile from './FacilityProfile';
import Profile from './Profile'
import Home from './Home';


const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='searchResults' component={SearchLandingPage} />
      <Route path='FacilityProfile' component={Profile} />
    </Route>
  </Router>
);

export default routes;

