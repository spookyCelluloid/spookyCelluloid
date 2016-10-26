import React, { Component } from 'react';

import ProfileCard from './ProfileCard.js';
import FilterBar from './FilterBar'


class SearchLandingPage extends Component {
  constructor(props) {
    super(props)
    console.log('********************SLP', this.props.searchData);
  }
  // render commented out because currently not passing in any props
  render() {
    return (
      <div>
        <div>{
          this.props.searchData.map((nursingHome) => {
            return (<ProfileCard key={nursingHome.id} searchData={nursingHome}/>)
          })
        }</div>

        <FilterBar filterResults={this.props.filterResults} />

        <div className='footer'> 
          <a href='#'>Home</a>
          <a href='#'>About Us</a>
          <a href='#'>Contact Us</a>
        </div>
        {this.props.children}
      </div>
    )
  }
} 

export default SearchLandingPage;

