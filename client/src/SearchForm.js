import React, {Component} from 'react';
import $ from 'jquery';
import ProfileCard from './ProfileCard.js';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  handleSubmit(event) {
    event.preventDefault();
    console.log("Text field value is: " + this.state.value);



    $.ajax({
      url: 'http://localhost:8080/?search="' + this.state.value + '"',
      type: 'GET',
      success: data => {
        console.log('success!!!!!!!!', data);
        this.props.handleResponse(data);
      },
      error: data => {
        console.error('errror with submit get', data);
      }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" placeholder='search by name or city' value={this.state.value} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default SearchForm;



     //  <form onSubmit={this.handleSubmit.bind(this)} className="MyForm">
     //    <input className='answer' type="text" name="response" ref={(i) => this._query = i}/>
     //    <button type="submit">Submit</button>
     // </form>
     //  