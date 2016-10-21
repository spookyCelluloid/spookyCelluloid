import React, { Component } from 'react';

class SearchLandingPage extends Component {
  constructor(props) {
    super(props)
  }
    render() {
    return (
      <div>
      {this.props.map(searchResult => 
        <div>
          <img src='props.profilePicture' />
          <h3>{props.facility_name}</h3>
          <p>{props.address}</p>
          <p>{props.rating}</p>
          <p>{props.specialties}</p>
          <p>{props.phone_number}</p>
        </div>
      )}

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