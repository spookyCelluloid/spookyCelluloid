import React, { Component } from 'react';
import StarRating from 'react-star-rating';
require('./ProfileCardCss.css');

class ProfileCard extends Component {
  constructor(props) {
    super(props)
    console.log('props', props);
  }
  render() {
    return (
      <div className='profileCard col-md-9'>
        <div className='image col-md-3'>
          <img className='profileCardImg' src={this.props.facility.image_url}/>
        </div>
        
        <div className='info col-md-9'>
          <h3 className='profileCardName' onClick={() => this.props.onTitleClick(this.props.facility.id)}>{this.props.facility.facility_name}</h3>
          <p>{this.props.facility.street} {this.props.facility.city} , {this.props.facility.state} {this.props.facility.zip}</p>
          <p>{this.props.facility.phone_number}</p>
        </div>

        <div className='profileCardSpecialties'>
          {this.props.facility.specialties.map((specialty) => (<span>{specialty}</span> ))}
        </div>

        <div className='starRating'>
            <StarRating name='starRating' rating={this.props.facility.average_rating}/>
        </div>
      </div>
      
     
      
      )
  }
}

export default ProfileCard 

