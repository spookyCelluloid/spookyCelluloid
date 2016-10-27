import React, { Component } from 'react';
import SearchForm from './SearchForm';
require('./HomeCSS.css');

class Home extends Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.handleResponse = this.handleResponse.bind(this);
  }

  handleResponse(data) {
    console.log('handleResponse', data);
    this.props.handleResponseApp(data);
  }

  render() {
    return (
      <div>
        <div className='main'>
          <div className='content-wrap'>
            <div className='content'>
              <h1 className='heading-lg'> One Up Eldercare </h1>
              <h2 className='heading-sub'> Where do you want to retire? </h2>
              <div className='search'>
                <SearchForm queryDatabase={this.props.queryDatabase} handleChange={this.props.handleChange} />
              </div>
            </div>
          </div>
        </div>
        <div className='wrapper'>
        <div className="Quotes Row" >
          <blockquote className='col-md-3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur, turpis a suscipit condimentum, augue lectus egestas dolor, a consectetur neque elit sit amet enim. Phasellus ut orci sit amet risus condimentum elementum non at tellus. Morbi id facilisis turpis. <span> Robin Kuehn </span> </blockquote>
           <blockquote className='col-md-3'> . Aenean eu neque feugiat, lacinia est ut, pulvinar elit. Cras sagittis, quam at lobortis euismod, metus ante finibus lacus, sed tempor odio lorem cursus orci. Duis aliquam nisi tincidunt convallis laoreet. In tincidunt non eros vel dapibus. Vestibulum non porta enim. Cras quis tellus quis ex varius rhoncus quis sed turpis.s <span> Robin Kuehn </span> </blockquote>
            <blockquote className='col-md-3'> . Aenean eu neque feugiat, lacinia est ut, pulvinar elit. Cras sagittis, quam at lobortis euismod, metus ante finibus lacus, sed tempor odio lorem cursus orci. Duis aliquam nisi tincidunt convallis laoreet. In tincidunt non eros vel dapibus. Vestibulum non porta enim. Cras quis tellus quis ex varius rhoncus quis sed turpis. <span> Robin Kuehn </span> </blockquote>
        </div>
         <div className="Featured" >
          <div style={{width: '300px', height: '300px', border: '3px solid blue'}}> </div>
        </div>
      </div>
      </div>
          
         
    )
  }
}

export default Home;







