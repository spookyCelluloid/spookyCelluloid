import React, { Component } from 'react';
import Header from'./Header'
import {browserHistory} from 'react-router';
import $ from 'jquery';
import axios from 'axios';
require('./main.css');

//indexRoute of react router. This is the landing page.


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      value: '',
      currentProfile: {}
    }
  }

  handleChange(value) {
    this.setState({value});
  }

  queryDatabase(event) {
    event.preventDefault();
    event.target.value = '';
    var app = this;

    axios.get('http://138.68.48.45:8080/?search="' + this.state.value + '"')
      .then(function ({data}) {
        $('input[type="text"], textarea').val('');
        app.setState({data});

        browserHistory.push('/searchResults');
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  onTitleClick(facilityID) {

    //when a profile card is clicked from the search landing page,
    //a get request is made to retrive all the information for that specific facility.
    axios.get('http://138.68.48.45:8080/facility?id=' + facilityID)
      .then(({data}) => {
        var sum = 0;
        data.reviews.forEach((review) => {
          sum += review.rating;
        });

        var averageRating = Math.round(sum / data.reviews.length);

        data.averageRating = averageRating;

        this.setState({currentProfile: data});
        browserHistory.push('/FacilityProfile');
      })
      .catch((error) => {
        console.log(error);
      })
  };

  filterResults(queryString) {
    var app = this;

    axios.get('http://138.68.48.45:8080/?search="' + this.state.value + '"&' + queryString)
    .then(function ({data}) {
       app.setState({data})
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  //used for for the home button icon
  redirect(pageTo) {
    browserHistory.push('/' + pageTo);
  }

  render() {
    return (
      <div className="Site">
        <Header
          redirect={this.redirect}
          handleChange={this.handleChange.bind(this)}
          queryDatabase={this.queryDatabase.bind(this)}
        />

        <div className="Site-content">
          {this.props.children && React.cloneElement(this.props.children, {
            handleChange: this.handleChange.bind(this),
            queryDatabase: this.queryDatabase.bind(this),
            filterResults: this.filterResults.bind(this),
            onTitleClick: this.onTitleClick.bind(this),
            onCompareClick: this.onCompareClick,
            searchData: this.state.data,
            currentProfile: this.state.currentProfile,
            redirect: this.redirect
          })}
        </div>
      </div>
    );
  }
}

export default App;


