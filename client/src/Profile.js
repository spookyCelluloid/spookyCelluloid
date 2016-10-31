import React, { Component } from 'react';
import Lightbox from 'react-images';
require('./Profile.css');


class Profile extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      lightboxIsOpen: false
    }
  }

  lightboxDisplay(){
    this.setState({lightboxIsOpen: true});
  }

  closeLightbox() {
    this.setState({lightboxIsOpen: false})
  }

  render(){
    if(this.state.lightboxIsOpen === true ) {
      return(
        <Lightbox
        images={[{ src: `${this.props.currentProfile.image_url}`}]}
        isOpen={this.state.lightboxIsOpen}
        onClose={this.closeLightbox.bind(this)}
      />
      )
    } else if (this.state.lightboxIsOpen === false) {
    return(
      <div className='container-fluid wrapper'>
          
        <div className="row-fluid" data-spy="scroll" data-target="#myScrollspy" data-offset="20">
          <div className="container">
            <div className="row">
              
              <div className='col-md-3 scrollList' id="myScrollSy" >
                <ul className="nav nav-pills nav-stacked">
                  <li><a href="#section1">At a Glance</a></li>
                  <li><a href="#section2">Contact Info</a></li>
                  <li><a href="#section3">Reviews</a></li>
                 
                </ul>
                <img role='presentation' src={this.props.currentProfile.image_url} onClick={()=>{this.lightboxDisplay()}} style={{height: '100px', width: '150px'}} />
              </div>
              
              <div className='col-md-8 information'>
                <div id="section1">
                  <div className='scrollTitle'> 
                  <h1>{this.props.currentProfile.facility_name}</h1>
                  </div>
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
                  <h3>Contact Information</h3>
                    <p className='street'>{`${this.props.currentProfile.street} ${this.props.currentProfile.city}, ${this.props.currentProfile.state} ${this.props.currentProfile.zip}`}</p>
                    <p className='phoneNumber'>{this.props.currentProfile.phone_number}</p>
                  </div>
              

                 <div id='section3' className='reviews'>
                 <h3>Reviews</h3>
                  {this.props.currentProfile.reviews.map((review) => {
                      return (
                        <div className='individualReview'>
                          <p className='reviewContent'>{review.content}</p>
                          <p className='reviewName'><strong>{review.first_name} {review.last_name}</strong> <span>{review.date}</span></p>
                        </div>
                      )
                    })}
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
  }

}

export default Profile;