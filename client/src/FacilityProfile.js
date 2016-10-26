import React, { Component } from 'react';


const FacilityProfile = ({currentProfile}) => (

  <div>
    <div>{currentProfile.facility_name} </div>
    <div>{console.log(currentProfile)}</div>
    <div>
      <h2>{currentProfile.facility_name}</h2>
      <h2>{currentProfile.reviews[0].rating}</h2>
    </div>
    <div>
      <img src='http://www.nursinghomes.com/wp-content/tools/TimThumb.php?src=/wp-content/uploads/property-images/055107/055107__4.jpg&w=800&h=800zc=3'/>
    </div>
    <div>
      <p>{currentProfile.description}</p>
    </div>
    <div>
      <p>{currentProfile.phone_number}</p>
      <p>{currentProfile.street}</p>
      <p>{currentProfile.city}</p>
      <p>{currentProfile.state}</p>
      <p>{currentProfile.zip}</p>
    </div>
    <div>
      {currentProfile.reviews.map((review) => {
        return (
          <div>
            <p>{review.first_name}</p>
            <p>{review.last_name}</p>
            <p>{review.rating}</p>
            <p>{review.date}</p>
            <p>{review.content}</p>
          </div>
        )
      })}
    </div>
  </div>
);

export default FacilityProfile;