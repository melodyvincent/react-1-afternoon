
import React, { Component } from 'react';

export default class FilterObject extends Component {

  constructor() {
    super();

    this.state = {
      sales: [
        {
          name: 'Tristan Cecil',
          title: 'salesrep',
          age: 12,
        },
        {
          name: 'Carter Thomas',
          age: 24,
          race: 'caucasian'
          
        },
        {
          name: 'Emrey Lynn',
          title: 'owner',
        }
      ],

      userInput: '',
      filterSales: [],
    }
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filteredSales(prop) {
    let sales = this.state.sales;
    let filteredSales = [];

    for ( let i = 0; i < sales.length; i++ ) {
      if ( sales[i].hasOwnProperty(prop) ) {
        filteredSales.push(sales[i]);
      }
    }
    this.setState({ filterSales: filteredSales });
    console.log(filteredSales);
  }

  render() {
      console.log(this.state.filterSales);
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.sales, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filteredSales(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filterSales, null, 10) } </span>
      </div>
    )
  }
}