import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>
          <h1>Nursing Home App</h1>
          <input placeholder='search by name or city' name='searchValue'/>
          <input type='submit'/>
        </div>
        <div class='featuredCareFacilities'>
          <div class='facility1'>

          </div>
          <div class='facility2'>

          </div>
          <div class='facility3'>

          </div>
        </div>
        <div class='featuredQuotes'>
          <div class='quote1'>

          </div>
          <div class='quote2'>

          </div>
          <div class='quote3'>

          </div>
        </div>

        <div class='footer'> 
          <a href ='#'>Home</a>
          <a href ='#'>About Us</a>
          <a href ='#'>Contact Us</a>
        </div>

      </div>
    )
  }
}

class searchForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      React.createElement('form', {classname: 'searchForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'search by name or city',
          value: this.props.value.name
        }))
      <SearchLandingPage searchValue = {input.value}/>
    )
  }
}


// // different example of creating a form
// class searchForm extends Component {
//   constructor(props) {
//     super(props);
//   }

//   getInitialState: function() {
//     return {
//       userInput: ''
//     }
//   },

//   handleUserInput: function(e) {
//     this.setState({
//       userInput: e.target.value
//     });
//   },

//   render: function() {
//     return (
//       <div>
//         <input type='text' placeholder: 'search by name or city' value={this.state.userInput} onChange={this.handleUserInput} />
//       </div>
//     );
//   };
// }


export default Header;





