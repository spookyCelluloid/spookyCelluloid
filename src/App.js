import React, { Component } from 'react';
import Header from './Header';
import Mission from './Mission';


class App extends Component {
  render() {
    return (
      <div className="App Row container-fluid row row-centered">
        <div className="App-header col-md-8 text-center" style={{'border':'3px solid orange'}}>
          <Header />
        </div>
        <div className="col-md-8" style={{'border':'3px solid blue'}}>
          <Mission />
        </div>
        <div className="col-md-8">
          <h1 style={{'border':'3px solid red'}}>Search Bar</h1>
        </div>
      </div>
    );
  }
}

export default App;
