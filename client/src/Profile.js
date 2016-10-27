import React, { Component } from 'react';
require('./Profile.css');


class Profile extends Component {
  constructor(props){
    super(props);
    console.log('profile******', this.props.currentProfile.reviews)
  }

  render(){
    return(
      <div className='container-fluid'>
        <div className='col-md-9 mainpicContainer'>
          <img className='mainpic' src={this.props.currentProfile.image_url} />
        </div>
          
        <div className="row-fluid" data-spy="scroll" data-target="#myScrollspy" data-offset="20">
          <div className="container">
            <div className="row">
              
              <div className='col-md-3 scrollList' id="myScrollSy" >
                <ul className="nav nav-pills nav-stacked">
                  <li><a href="#section1">At a Glance</a></li>
                  <li><a href="#section2">Contact Info</a></li>
                  <li><a href="#section3">Reviews</a></li>
                </ul>
              </div>
              
              <div className='col-md-8 information'>
                <div id="section1"> 
                  <h1>{this.props.currentProfile.facility_name}</h1>
                  <p>{this.props.currentProfile.description}</p>
                  <h3>Amenitites</h3>
                  <ul>
                    <li>Average Years of Experience: {this.props.currentProfile.average_years_of_experience} </li>
                    <li>Capacity: {this.props.currentProfile.capacity} </li>
                    <li>Cost Per Day: {this.props.currentProfile.cost_per_day} </li>
                    <li>Dietary Options: {this.props.currentProfile.dietary_options} </li>
                    <li>Ownership: {this.props.currentProfile.ownership} </li>
                    <li>Social Events: {this.props.currentProfile.social_events} </li>
                  </ul>
                </div> 

                  <div id='section2'>
                  <p><strong>Contact Information: </strong></p>
                    <p className='phoneNumber'>{this.props.currentProfile.phone_number}</p>
                    <p className='street'>{this.props.currentProfile.street}</p>
                    <p className='city'>{this.props.currentProfile.city}</p>
                    <p className='state'>{this.props.currentProfile.state}</p>
                    <p className='zip'>{this.props.currentProfile.zip}</p>
                  </div>
              

                 <div id='section3' className='reviews'>
                 <h1>Reviews</h1>
                  {this.props.currentProfile.reviews.map((review) => {
                      return (
                        <div>
                          <p className='reviewName'>{review.first_name} {review.last_name}</p>
                          <p className='reviewDate'>Date {review.date}</p>
                          <p className='reviewContent'><strong>Review: </strong>{review.content}</p>
                        </div>
                      )
                    })}
                  </div>
                 <div id="section3"> 
                  <h1>Visit this Facility</h1>
                  <p>Try to scroll this page and look at the navigation list while scrolling!</p>
                </div> 
                 <div id="section4"> 
                  <h1>Section 4</h1>
                  <p>Try to scroll this page and look at the navigation list while scrolling!</p>
                </div> 
                <div id="section5"> 
                  <h1>Section 5</h1>
                  <p>Try to scroll this page and look at the navigation list while scrolling!</p>
                </div> 
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Profile;