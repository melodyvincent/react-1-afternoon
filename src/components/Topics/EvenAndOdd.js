import React, { Component } from "react";

export default class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }

  handleChange(value) {
    this.setState({ userInput: value });
  }

  assignEvenOdds(userInput) {
    let array = userInput.split(",");
    let even = [];
    let odd = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        even.push(array[i]);
      } else {
        odd.push(array[i]);
      }

    }
    this.setState({ evenArray: even, oddArray: odd})
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4> Evens and Odds </h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.assignEvenOdds(this.state.userInput)}
        >
          {" "}
          Split{" "}
        </button>
        <span className="resultsBox">Evens: {this.state.evenArray}</span>
        <span className="resultsBox"> Odds: {this.state.oddArray}</span>
      </div>
    );
  }
}
