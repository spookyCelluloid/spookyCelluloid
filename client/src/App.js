import React, { Component } from 'react';
import $ from 'jquery';
import SearchLandingPage from './SearchLandingPage'
import SearchForm from './SearchForm';
import FilterBar from './FilterBar'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      value: ''
    } 
    
  }

  handleChange(value) {
    console.log(value)
    this.setState({value});
  }

  queryDatabase(event) {
    event.preventDefault();
    event.target.value = '';
    console.log("Text field value is: " + this.state.value);

    $.ajax({
      url: 'http://localhost:8080/?search="' + this.state.value + '"',
      type: 'GET',
      success: data => {
        $('input[type="text"], textarea').val('');
        this.setState({data})
        console.log('success!!!!!!!!', data);
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

  renderData() {
    if (this.state.data.length) {
      return <SearchLandingPage filterResults={this.filterResults.bind(this)} searchData={this.state.data}/>
    }
  }

  render() {
    return (
      <div>Nursing Home App
        <div>
          <SearchForm queryDatabase={this.queryDatabase.bind(this)} handleChange ={this.handleChange.bind(this)} />
        </div>
        {this.renderData()}

      </div>
    );
  }
}

export default App;