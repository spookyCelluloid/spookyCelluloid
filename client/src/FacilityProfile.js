import React, { Component } from 'react';
import StarRating from 'react-star-rating';
require('./facilityProfile.css');

const FacilityProfile = ({currentProfile}) => (

  <div>
    <div className='title'>
        <h2 className='facilityName'>{currentProfile.facility_name}</h2>
        <h2 className='headerStar'><StarRating name='mainRating' rating={currentProfile.averageRating}/></h2>
    </div>
    <div className='mainImage'>
      <div className='imageBorder'>
        <img src='http://www.nursinghomes.com/wp-content/tools/TimThumb.php?src=/wp-content/uploads/property-images/055107/055107__4.jpg&w=800&h=800zc=3'/>
      </div>
    </div>
    <div>
      <p>{console.log(currentProfile)}</p>
      <div className='description'>
        <p><strong>Description: </strong>{currentProfile.description}</p>
      </div>
      <div className='contactInfo'>
      <p><strong>Contact Information: </strong></p>
        <p className='phoneNumber'>{currentProfile.phone_number}</p>
        <p className='street'>{currentProfile.street}</p>
        <p className='city'>{currentProfile.city}</p>
        <p className='state'>{currentProfile.state}</p>
        <p className='zip'>{currentProfile.zip}</p>
      </div>
    </div> 
    <div className='reviews'>
      {currentProfile.reviews.map((review) => {
        return (
          <div>
            <p className='reviewName'>{review.first_name} {review.last_name}</p>
            <div className='starRating'>
              <StarRating name='starRating' rating={review.rating}/>
            </div>
            <p className='reviewDate'>Date {review.date}</p>
            <p className='reviewContent'><strong>Review: </strong>{review.content}</p>
          </div>
        )
      })}
    </div>
  </div>
);

export default FacilityProfile;