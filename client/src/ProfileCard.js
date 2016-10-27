import React, { Component } from 'react';
import StarRating from 'react-star-rating';
import StarRatingComponent from 'react-star-rating-component';
require('./ProfileCardCss.css');

class ProfileCard extends Component {
  constructor(props) {
    super(props)
    console.log('props', props);
  }
  render() {
    return (
      <div className='profileCard'>
        <div className='image col-md-3'>
          <img className='profileCardImg' src={this.props.facility.image_url}/>
        </div>
        
        <div className='info col-md-9'>
          <h3 className='profileCardName' onClick={() => this.props.onTitleClick(this.props.facility.id)}> {this.props.facility.facility_name} </h3>
          <StarRatingComponent 
                    name="rate2" 
                    editing={false}
                    renderStarIcon={() => <span>★</span>}
                    starCount={5}
                    value={this.props.facility.average_rating}
                />

          <p>{this.props.facility.street} {this.props.facility.city} , {this.props.facility.state} {this.props.facility.zip}</p>
          <p>{this.props.facility.phone_number}</p>

          <div className='profileCardSpecialties'>
            {this.props.facility.specialties.map((specialty) => (<span key={specialty}>{specialty}</span> ))}
          </div>

         
        </div>

       

     
      </div>
      
     
      
      )
  }
}

export default ProfileCard;

