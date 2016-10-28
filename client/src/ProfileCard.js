import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
require('./ProfileCardCss.css');

class ProfileCard extends Component {
  constructor(props) {
    super(props)
  }

  renderSpecialty(specialties) {
    if (specialties.length) {
      return (
        <div className='profileCard-specialty'>
          <div className='profileCardSubtitle'>Specialties:</div>
          <div className='profileCardSpecialties'>
            {specialties.map((specialty) => (<span>{specialty}, </span> ))}
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className='profile'>
        <div className='profileCard' onClick={() => this.props.onTitleClick(this.props.facility.id)}>
          <div className='image col-md-3'>
            <img role="presentation" className='profileCardImg' src={this.props.facility.image_url}/>
          </div>

          <div className='info col-md-9'>
            <h3 className='profileCardName' > {this.props.facility.facility_name} </h3>

            <StarRatingComponent
              name="rate2"
              editing={false}
              renderStarIcon={() => <span>★</span>}
              starCount={5}
              value={this.props.facility.average_rating}
            />
            <span className='num_ratings'> {this.props.facility.num_ratings} review</span>

            <div className='profileCardSubtitle'>Contact:</div>
            <p>{this.props.facility.street}, {this.props.facility.city}, {this.props.facility.state} {this.props.facility.zip}</p>
            <p>{this.props.facility.phone_number}</p>
          </div>
        </div>

        {this.renderSpecialty(this.props.facility.specialties)}

      </div>

      )
  }
}

export default ProfileCard;

