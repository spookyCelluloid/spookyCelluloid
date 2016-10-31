import React, { Component } from 'react';
import SearchForm from './SearchForm';
require('./Header.css');

class Header extends Component {
  constructor(props) {
    super(props)
    this.handleResponse = this.handleResponse.bind(this);
  }

  handleResponse(data) {
    this.props.handleResponseApp(data);
  }

  render() {
    return (
      <div className='header'>
        <span className='appName'>One Up Elderly</span>

        <img role="presentation"
          className='icon'
          onClick={() => this.props.redirect('')} />

        <div
          className='headerSearchForm inline'>
          <SearchForm queryDatabase={this.props.queryDatabase} handleChange={this.props.handleChange} />
        </div>

      </div>
    )
  }
}

export default Header;
