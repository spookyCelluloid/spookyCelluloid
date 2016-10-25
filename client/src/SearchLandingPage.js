import React, { Component } from 'react';

import ProfileCard from './ProfileCard.js';


class SearchLandingPage extends Component {
  constructor(props) {
    super(props)
    console.log('********************SLP', this.props.searchData);
  }
  // render commented out because currently not passing in any props
  render() {
    return (
      <div>

        <ProfileCard searchData={this.props.searchData}/>

        <div class='footer'> 
          <a href='#'>Home</a>
          <a href='#'>About Us</a>
          <a href='#'>Contact Us</a>
        </div>

      </div>
    )
  }
} 

export default SearchLandingPage;

