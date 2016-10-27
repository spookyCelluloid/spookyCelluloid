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
      <div>
        <form onSubmit={(e) => this.props.queryDatabase(e)}>
          <input className='inputBox' type="text" placeholder='search by name or city' onChange={(e) => this.props.handleChange(e.target.value)} />
          <button className='submit' type="submit">Submit</button>
        </form>
      </div>
    );
  }
}; 

export default SearchForm;

