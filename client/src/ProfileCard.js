import React, { Component } from 'react';

class ProfileCard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h3>name</h3>
        <p>rank</p>
        <img/>
        <p>address</p>
        <p>phone number</p>
        <p>rating</p>
        <p>number of ratings</p>
        <p>amenities</p>
      </div>
    )
  }
}
