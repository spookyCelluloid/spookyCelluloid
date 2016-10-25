import React, { Component } from 'react';

class ProfileCard extends Component {
  constructor(props) {
    super(props)
    console.log('props', props);
  }
  render() {
    return (
      <div className="profileCard">
        <img/>
        <p>{this.props.searchData.average_rating}</p>
        <h3>{this.props.searchData.facility_name}</h3>
        <p>{this.props.searchData.street} + {this.props.searchData.city} + {this.props.searchData.zip} + {this.props.searchData.state}</p>
        <p>{this.props.searchData.phone_number}</p>
        <p>{this.props.searchData.num_ratings}</p>
        <p>{this.props.searchData.specialities.map(function(speciality) {
          <p>{speciality}</p>
        })}</p>
      </div>
    )
  }
}

export default ProfileCard 
