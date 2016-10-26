import React, { Component } from 'react';
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
      capacity: 0
    };

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
          <ul>
            <li><input type="checkbox" value='Fractured Hips' onClick={ (event) => this.updateFilter('Specialties', event.target.value) }/> Fractured Hips</li>
            <li><input type="checkbox" value='Strokes' onClick={ (event) => this.updateFilter('Specialties', event.target.value) }/> Strokes</li>
            <li><input type="checkbox" value='Colostomy Care' onClick={ (event) => this.updateFilter('Specialties', event.target.value) }/> Colostomy Care</li>
            <li><input type="checkbox" value='Catheter Care' onClick={ (event) => this.updateFilter('Specialties', event.target.value) }/> Catheter Care</li>
            <li><input type="checkbox" value='IV Therapy' onClick={ (event) => this.updateFilter('Specialties', event.target.value) }/> IV Therapy</li>
            <li><input type="checkbox" value='Dressings and Care for Pressure Ulcers' onClick={ (event) => this.updateFilter('Specialties', event.target.value) }/> Dressings and Care for Pressure Ulcers</li>
            <li><input type="checkbox" value='Tube Feedings' onClick={ (event) => this.updateFilter('Specialties', event.target.value) }/> Tube Feedings</li>
            <li><input type="checkbox" value='Oxygen and Respiratory Therapy' onClick={ (event) => this.updateFilter('Specialties', event.target.value) }/> Oxygen and Respiratory Therapy</li>
            <li><input type="checkbox" value='Care During Final Stages of Illness Such as Cancer' onClick={ (event) => this.updateFilter('Specialties', event.target.value) }/> Care During Final Stages of Illness Such as Cancer</li>
            <li><input type="checkbox" value='Care for Surgical Wounds' onClick={ (event) => this.updateFilter('Specialties', event.target.value) }/> Care for Surgical Wounds</li>
            <li><input type="checkbox" value='Dementia Care' onClick={ (event) => this.updateFilter('Specialties', event.target.value) }/> Dementia Care</li>
            <li><input type="checkbox" value='Illiostomy' onClick={ (event) => this.updateFilter('Specialties', event.target.value) }/> Illiostomy</li>
            <li><input type="checkbox" value='Diabetic Care' onClick={ (event) => this.updateFilter('Specialties', event.target.value) }/> Diabetic Care</li>
            <li><input type="checkbox" value='Respite stays' onClick={ (event) => this.updateFilter('Specialties', event.target.value) }/> Respite stays</li>
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