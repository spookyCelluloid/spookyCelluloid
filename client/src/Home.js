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
        <div>
          
          <SearchForm queryDatabase={this.props.queryDatabase} handleChange={this.props.handleChange} />
        </div>
        <div>
          <img className="homePageImage" src="https://aos.iacpublishinglabs.com/question/aq/700px-394px/medicare-pay-nursing-home-care_dc035c9e73e7006e.jpg?domain=cx.aos.ask.com"></img>
        </div>
        <div className='featuredCareFacilities'>
          <div className='facility1'>
            <h4>San Francisco Towers</h4>
          </div>
          <div className='facility2'>
            <h4>Linda Mar Care Center</h4>
          </div>
          <div className='facility3'>
            <h4>Bancroft Convalescent Hospital</h4>
          </div>
        </div>
        <div className='featuredQuotes'>
          <div className='quote1'>
            <p></p>
          </div>
          <div className='quote2'>
            <p></p>
          </div>
          <div className='quote3'>
            <p></p>
          </div>
        </div>

        

      </div>
    )
  }
}

export default Home;





