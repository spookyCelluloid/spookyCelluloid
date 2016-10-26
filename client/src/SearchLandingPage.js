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
        <button onClick={() => this.props.onCompareClick()}>Compare</button>
        <div>{
          this.props.searchData.map((nursingHome) => {
            return (<ProfileCard onTitleClick={this.props.onTitleClick} key={nursingHome.id} facility={nursingHome}/>)
          })
        }</div>

        <FilterBar filterResults={this.props.filterResults} />

        {this.props.children}
      </div>
    )
  }
} 

export default SearchLandingPage;

