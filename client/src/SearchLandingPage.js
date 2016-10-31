import React, { Component } from 'react';
import ProfileCard from './ProfileCard.js';
import FilterBar from './FilterBar'
import $ from 'jquery';
require('./SearchLandingPage.css');


class SearchLandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollTop: 0
    }
  }

  // backToTop Button setup
  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
     this.setState({scrollTop: $(window).scrollTop()});
  }

  scrollToTop() {
    $(window).animate({scrollTop: 0}, 1000);
  }

  // render commented out because currently not passing in any props
  render() {
    return (
      <div>

        <FilterBar filterResults={this.props.filterResults} />

        <div className='col-md-9'>{
          this.props.searchData.map((nursingHome) => {
            return (<ProfileCard onTitleClick={this.props.onTitleClick} key={nursingHome.id} facility={nursingHome}/>)
          })
        }</div>

        {this.props.children}

        <a href="#" className="move-top" onClick={() => this.scrollToTop()}></a>

      </div>
    )
  }
}

export default SearchLandingPage;
