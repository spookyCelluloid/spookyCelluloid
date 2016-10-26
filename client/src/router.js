import React from 'react';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import App from './App';
import SearchLandingPage from './SearchLandingPage';
import SearchForm from './SearchForm';


const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='home' component={SearchForm} />
      <Route path='searchResults' component={SearchLandingPage} />
    </Route>
  </Router>
);

export default routes;

 