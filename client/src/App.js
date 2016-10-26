import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import $ from 'jquery';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      value: ''
    } 
  }

  handleChange(value) {
    this.setState({value});
  }

  queryDatabase(event) {
    event.preventDefault();
    event.target.value = '';
    var app = this;

    axios.get('http://localhost:8080/?search="' + this.state.value + '"')
      .then(function (response) {
        $('input[type="text"], textarea').val('');
        app.setState({data: response.data});
        console.log('success!!!!!!!!', response);

        browserHistory.push('/searchResults');  
      })
      .catch(function (error) {
        console.log(error);
      });
   
  }

  onTitleClick() {
    browserHistory.push('/FacilityProfile');
  };

  filterResults(queryString) {
    var app = this;

    axios.get('http://localhost:8080/?' + queryString)
    .then(function ({data}) {
       app.setState({data})
        console.log('success with filtering!!!!!!!!', data);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  render() {
    return (
      <div>Nursing Home App
        <div>
          {this.props.children && React.cloneElement(this.props.children, {
            handleChange: this.handleChange.bind(this),
            queryDatabase: this.queryDatabase.bind(this),
            filterResults: this.filterResults.bind(this),
            onTitleClick: this.onTitleClick,
            searchData: this.state.data
          })}
        </div>
        <div className='footer'> 
          <a href='#'>Home</a>
          <a href='#'>About Us</a>
          <a href='#'>Contact Us</a>
        </div>
      </div>
    );
  }
}

export default App;


      