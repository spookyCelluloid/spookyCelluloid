import React, { Component } from 'react';

import ProfileCard from './ProfileCard.js';


class SearchLandingPage extends Component {
  constructor(props) {
    super(props)
  }
  // render commented out because currently not passing in any props
  render() {
    return (
      <div>

        <ProfileCard data={this.props.searchData}/>

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




      // {this.props.map(searchResult =>

      //       <ProfileCard {}/>
      // )}