import React, { Component } from 'react';
import axios from 'axios';
require('star-rating');
require('./FilterBar.css');

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
      filterList: [],
      displayFilterList: [],
      checkbox: true,
      star: [1, 2, 3, 4, 5]
    };

  }

  componentDidMount() {
    axios.get('http://localhost:8080/getFilterList')
      .then(({data}) => {
        this.setState({
          filterList: data,
          displayFilterList: data
        });
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
        query += '"' + specialty + '",';
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
      console.log(this.state.Ownership);
      query += '&ownership=';

      this.state.Ownership.forEach( (whoOwns) => {
        query += '"' + whoOwns + '",';
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
  }

  updateList(value) {
    var display = this.state.filterList.filter((specialty) => specialty.name.toLowerCase().indexOf(value.toLowerCase()) > -1)

    this.setState({displayFilterList: display});
  }

  clickStar(num) {
    console.log(num);
  }

  render() {

    return (
      <div className='sideBar col-md-2'>

        <div className='filterBlock'><span className='filterTitle'>Features:</span> <br/>
          <div
            className='filterItem'
            onClick={ (event) => {
              this.setState({checkbox: !this.state.checkbox});
              this.updateFilter('Yes', 'Medicare')
            }}>
            <input
              type="checkbox"
              checked={this.state.Yes.indexOf('Medicare') > -1}
              /> Accepts Medicare
          </div>
          <div
            className='filterItem'
            onClick={ (event) => {
              this.setState({checkbox: !this.state.checkbox});
              this.updateFilter('Yes', 'social_events')
            }}>
            <input
              type="checkbox"
              checked={this.state.Yes.indexOf('social_events') > -1}
              /> Social Events
          </div>
        </div><br/>


        <div className='filterBlock' ><span className='filterTitle'>Ownership:</span> <br/>
          <div
            className='filterItem'
            onClick={ (event) => {
              this.setState({checkbox: !this.state.checkbox});
              this.updateFilter('Ownership', 'Government')
            }}>
            <input
              type="checkbox"
              checked={this.state.Ownership.indexOf('Government') > -1}
              /> Government
          </div>
          <div
            className='filterItem'
            onClick={ (event) => {
              this.setState({checkbox: !this.state.checkbox});
              this.updateFilter('Ownership', 'For-Profit')
            }}>
            <input
              type="checkbox"
              checked={this.state.Ownership.indexOf('For-Profit') > -1}
              /> For-Profit
          </div>
          <div
            className='filterItem'
            onClick={ (event) => {
              this.setState({checkbox: !this.state.checkbox});
              this.updateFilter('Ownership', 'Non-Profit')
            }}>
            <input
              type="checkbox"
              checked={this.state.Ownership.indexOf('Non-Profit') > -1}
              /> Non-Profit
          </div>
        </div><br/>


        <div className='filterBlock' ><span className='filterTitle'>Specialties:</span><br/>
          <input
            type='text'
            onChange={(e) => this.updateList(e.target.value)}
            placeholder='Search specialties..'/>

          {
            this.state.displayFilterList.map((facility) => (
              <div
                key={facility.name}
                className='filterItem'
                onClick={ () => {
                  this.setState({checkbox: !this.state.checkbox});
                  this.updateFilter('Specialties', facility.name);
                } }>
                <input
                  type="checkbox"
                  checked={this.state.Specialties.indexOf(facility.name) > -1}
                  /> {facility.name}
              </div>
            ))
          }
        </div><br/>


        <div className='filterBlock' ><span className='filterTitle'> Ratings: </span> <span>{this.state.average_rating} stars</span><br/>
          <star-rating>
            <div id='starRating'>
              {
                this.state.star.map((s) =>
                  <a
                    key={s}
                    className={s <= Number(this.state.average_rating) ? "star check" : "star"}
                    onClick={() => this.updateFilter('average_rating', ''+s)}>
                  </a>
                  )
              }
            </div>
          </star-rating>
        </div><br/>

        <div className='filterButton' onClick={() => this.createQueryString()}> Filter </div>
      </div>
      )
  }

}

export default Filter;

// <input
  // className='filterSlider'
  // type='range'
  // defaultValue={0}
  // max={5}
  // step={1}
  // onChange={(event) =>
  //   this.updateFilter('average_rating', event.target.value)
  // }/>
