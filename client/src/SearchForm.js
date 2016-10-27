import React, { Component } from 'react';
require('./SearchForm.css')

class SearchForm extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.handleChange('');
  }

  render() {
    return (
        <form onSubmit={(e) => this.props.queryDatabase(e)}>
          <input className='inputBox' type="text" onChange={(e) => this.props.handleChange(e.target.value)} />
          <button className='submit' type="submit">Submit</button>
        </form>
    );
  }
}; 

export default SearchForm;

