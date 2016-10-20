import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router'
import Header from './Header'
import Search from './Search'
import Mission from './Mission'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Header}/>
        <Route path='/header' component={Header}/>
        <Route path='/search' component={Search}/>
        <Route path='/mission' component={Mission}/>
      </Router>
    );
  }
}

export default App;