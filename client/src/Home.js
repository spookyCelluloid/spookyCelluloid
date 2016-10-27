import React, { Component } from 'react';
import SearchForm from './SearchForm';
require('./HomeCSS.css');

class Home extends Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.handleResponse = this.handleResponse.bind(this);
  }

  handleResponse(data) {
    console.log('handleResponse', data);
    this.props.handleResponseApp(data);
  }

  render() {
    return (
      <div>
        <div className='main'>
          <div className='content-wrap'>
            <div className='content'>
              <h1 className='heading-lg'> One Up Eldercare </h1>
              <h2 className='heading-sub'> Where do you want to retire? </h2>
              <div className='search'>
                <SearchForm queryDatabase={this.props.queryDatabase} handleChange={this.props.handleChange} />
              </div>
            </div>
          </div>
        </div>
      </div>
          
         
    )
  }
}

export default Home;







