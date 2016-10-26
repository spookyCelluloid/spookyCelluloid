import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import $ from 'jquery';


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

    $.ajax({
      url: 'http://localhost:8080/?search="' + this.state.value + '"',
      type: 'GET',
      success: data => {
        $('input[type="text"], textarea').val('');
        this.setState({data});
        console.log('success!!!!!!!!', data);

        browserHistory.push('/searchResults');  
        //Router.transitionTo('SearchLandingPage')
      },
      error: data => {
        console.error('errror with submit get', data);
      }
    });
   
  }

  filterResults(queryString) {
    $.ajax({
      url: 'http://localhost:8080/?' + queryString,
      type: 'GET',
      success: data => {
        this.setState({data})
        console.log('success with filtering!!!!!!!!', data);
      },
      error: data => {
        console.error('errror with submit get', data);
      }
    });
  }

  render() {
    return (
      <div>Nursing Home App
         <div>
           {this.props.children && React.cloneElement(this.props.children, {
             handleChange: this.handleChange.bind(this),
             queryDatabase: this.queryDatabase.bind(this),
             searchData: this.state.data
           })}
         </div>
        
      </div>
    );
  }
}

export default App;


      