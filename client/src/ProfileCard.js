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
        <p>{this.props.facility.average_rating}</p>
        <h3 onClick={() => this.props.onTitleClick(this.props.facility.id)}>{this.props.facility.facility_name}</h3>
        <p>{this.props.facility.street} + {this.props.facility.city} + {this.props.facility.zip} + {this.props.facility.state}</p>
        <p>{this.props.facility.phone_number}</p>
        <p>{this.props.facility.num_ratings}</p>
        <p>{this.props.facility.specialties.map(function(speciality) {
          <p>{speciality}</p>
        })}</p>
      </div>
    )
  }
}

export default ProfileCard 
