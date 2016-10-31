import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Carousel from 'nuka-carousel';

require('./HomeCSS.css');

class Home extends Component {
  constructor(props) {
    super(props)
    this.handleResponse = this.handleResponse.bind(this);
  }

  handleResponse(data) {
    this.props.handleResponseApp(data);
  }

  goFeatured(){
    //connect this to facility profile
    console.log('feature clicked');
  }

  render() {
    return (
      <div>
        <div className='main'>
          <div className='layer'/>
          <div className='content-wrap'>
            <div className='content'>
              <h1 className='heading-lg'> One Up Eldercare </h1>
              <h2 className='heading-sub'> Where do you want to retire? </h2>
              <div className='search'>
                <SearchForm queryDatabase={this.props.queryDatabase} handleChange={this.props.handleChange} />
              </div>
            </div>
          </div>
        </div>


        <div className="Quotes Row" >
          <blockquote className='col-md-3'> Searching for a good nursing home for my parents was challenging and stressful. One Up Eldercare gave me a place to see and read real reviews from people so that I could make the best decision for my parents and have piece of mind. Thanks One Up Eldercare! <span> Robbie G. </span> </blockquote>
           <blockquote className='col-md-3'> Navigating the internet can be a challenge at my age. There's so many different websites that can be hard to understand. One Up Eldercare is an easy to use website that let me see all the places around me so I could make a smart choice. I can't recommend it enough! <span> Sam H. </span> </blockquote>
            <blockquote className='col-md-3'> I went to a few different websites trying to find the information I needed on nursing homes. All the websites were outdated or had missing information and were really hard to navigate. Then I found One Up Eldercare and it was the first website that was easy to use and had everything I was looking for. It really is the only place to go to get all the info you need on nursing homes! <span> Jamil L. </span> </blockquote>
        </div>


        <div className="Featured" >
          <Carousel className='picSlider'>
                  <a>
                    <img role="presentation" onClick={()=>{this.goFeatured()}} src="http://www.californiaelderabuselawyer-blog.com/wp-content/uploads/sites/132/2015/11/Nursing-home-building.jpg"/>
                  </a>
                  <a><img role="presentation" onClick={()=>{this.goFeatured()}} src="http://adesteinhomecare.com/colorado-senior-care/wp-content/uploads/2015/04/Why-In-Home-Care-Is-A-Better-Option-For-Your-Mom-And-Dad-Than-A-Retirement-Home-.jpg"/></a>
                  <a><img role="presentation" onClick={()=>{this.goFeatured()}} src="https://mustbethistalltoride.files.wordpress.com/2015/06/retirement-home.jpg"/></a>
          </Carousel><hr/><hr/>
        </div>

      </div>




    )
  }
}

export default Home;







