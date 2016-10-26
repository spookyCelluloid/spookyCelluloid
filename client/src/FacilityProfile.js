import React, { Component } from 'react';


const FacilityProfile = ({currentProfile}) => (

  <div>This is the FacilityProfile page
    <div>{currentProfile.facility_name} </div>
  </div>
);

export default FacilityProfile;