import React, { Component } from 'react';
import axios from 'axios';
require('./main.css');

class Filter extends Component {
  constructor(props){
    super(props);
    this.state = {
      Specialties: [],
      Yes:[],
      Ownership: [],
      num_ratings: 0,
      average_rating: 0,
      average_years_of_experience: 0,
      capacity: 0,
      filterList: []
    };

  }

  componentDidMount() {
    axios.get('http://localhost:8080/getFilterList')
      .then(({data}) => {
        console.log(data);
        this.setState({filterList: data});
      })
      .catch((error) => {
        console.log(error);
      })
  }

  createQueryString() {
    var query = '';

    if (this.state.Specialties.length !== 0) {
      console.log('have ' + this.state.Specialties.length + ' specialties');
      query = '&specialties=';

      this.state.Specialties.forEach( (specialty) => {
        query += '"' + specialty + '"' + ',';
      })

      query = query.slice(0, query.length-1);
    }

    if (this.state.Yes.length !== 0) {
      console.log('have ' + this.state.Yes.length + ' Yeses');

      this.state.Yes.forEach( (yesValue) => {
        query += '&' + yesValue + '="Yes"';
      })

    }

    if (this.state.Ownership.length !== 0) {
      console.log('have ' + this.state.Ownership.length + ' Ownership');
      query += '&ownership=';

      this.state.Ownership.forEach( (whoOwns) => {
        query += '"' + whoOwns + '"' + ',';
      })

      query = query.slice(0, query.length-1);
    }

    if (this.state.average_rating > 0) {
      console.log('have ' + this.state.average_rating + ' rating');
      query += '&average_rating=' + this.state.average_rating;
    }

    query = query.slice(1);

    this.props.filterResults(query);



  }

  updateFilter(filtername, value) {
    if (filtername === 'Specialties' || filtername === 'Yes' || filtername === 'Ownership') {
      var temp = this.state[filtername];
      var index = temp.indexOf(value);

      if (index > -1) {
        temp.splice(index, 1);
      } else {
        temp.push(value);
        this.setState({filtername: temp});
      }
    } else if(filtername === 'average_rating') {
      this.setState({average_rating: value});
    } 

    console.log(this.state);

    // console.log(filtername, value);
  }

  render() {

    return (
      <div className='sideBar'>

        <div className='YesNo'>
          <ul>
            <li><input type="checkbox" value='Medicare' onClick={ (event) => this.updateFilter('Yes', event.target.value) }/> Accepts Medicare</li>
            <li><input type="checkbox" value='social_events' onClick={ (event) => this.updateFilter('Yes', event.target.value) }/> Social Events</li>
          </ul>
        </div>


        <div className='ownership' >Ownership
          <ul>
            <li><input type="checkbox" value='Government' onClick={ (event) => this.updateFilter('Ownership', event.target.value) }/> Government</li>
            <li><input type="checkbox" value='For-profit' onClick={ (event) => this.updateFilter('Ownership', event.target.value) }/> For-Profit</li>
            <li><input type="checkbox" value='Non-profit' onClick={ (event) => this.updateFilter('Ownership', event.target.value) }/> Non-Profit</li>
          </ul>
        </div>


        <div className='Specialties' >Specialties
          <ul>{
            this.state.filterList.map(({name}) => (
              <li>
                <input 
                  type="checkbox" 
                  value={name} 
                  onClick={ (e) => this.updateFilter('Specialties', event.target.value) }/>
                   {name}
              </li>
              ))
          }
          </ul>
        </div>


        <div className='slideBar Slider' > Ratings: <span>{this.state.average_rating}</span>
          <input type='range' defaultValue={0} max={5} step={1} style={{'width': '100px'}} onChange={(event) => this.updateFilter('average_rating', event.target.value)}/>
        </div>
        <button onClick={() => this.createQueryString()}> Filter </button>
      </div>
      )
  }

}

export default Filter;
