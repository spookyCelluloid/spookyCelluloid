import React, { Component } from 'react';


const FacilityProfile = ({searchData}) => (

  <div>This is the FacilityProfile page
    <div>{searchData[0].facility_name} </div>
  </div>
);

export default FacilityProfile;