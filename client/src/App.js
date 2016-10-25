import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router'
import Header from './Header'
import SearchLandingPage from './SearchLandingPage'
import Mission from './Mission'

class App extends Component {
  constructor(props) {
    super(props)
    this.data = undefined;
  }

  handleResponseApp(data) {
    console.log('handleResponseApp', data);
    this.data = data;
  }

  renderData() {
    if(!this.data === undefined) {
      return (
        <SearchLandingPage searchData={this.data} />
      )
    }
  }

  render() {
    return (
      <div>
        <div>
          <Header handleResponseApp={this.handleResponseApp}/>
        </div>
        <div>
          {this.renderData()}
        </div>
        <div>
          <Router history={browserHistory}>
            <Route path='/' component={Header}/>
            <Route path='/header' component={Header}/>
            <Route path='/search' component={SearchLandingPage}/>
            <Route path='/mission' component={Mission}/>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;