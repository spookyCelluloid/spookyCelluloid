import React, { Component } from 'react';
import SearchForm from './SearchForm';

class Header extends Component {
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
          <h1>Nursing Home App</h1>
          <SearchForm handleResponse={this.handleResponse}/>
        </div>
        <div class='featuredCareFacilities'>
          <div class='facility1'>

          </div>
          <div class='facility2'>

          </div>
          <div class='facility3'>

          </div>
        </div>
        <div class='featuredQuotes'>
          <div class='quote1'>

          </div>
          <div class='quote2'>

          </div>
          <div class='quote3'>

          </div>
        </div>

        <div class='footer'> 
          <a href ='#'>Home</a>
          <a href ='#'>About Us</a>
          <a href ='#'>Contact Us</a>
        </div>

      </div>
    )
  }
}

export default Header;





