import React,  { Component } from 'react';


export default class FilterString extends Component {
    constructor(){
        super();

        this.state = {
            fruits: ['mango', 'guava', 'strawberries', 'apples', 'bananas'],
            userInput: "",
            filteredFruits: []
        };
    }

    handleChange(val) {
        this.setState ({userInput: val})

    }
    filterFruits(userInput) {
        let fruits = this.state.fruits;
        let filteredFruits = [];
    
        for ( let i = 0; i < fruits.length; i++ ) {
          if ( fruits[i].includes(userInput) ) {
            filteredFruits.push(fruits[i]);
          }
        }
    
        this.setState({ filteredFruits: filteredFruits});
      }
    

    render(){
        console.log(this.state)
        return(
           <div className="puzzleBox filterStringPB">
           <h4> Filter String</h4>
           <span className="puzzleText"> Fruits: {JSON.stringify(this.state.fruits, null, 10) } </span>
           <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }></input>
           <button className='confirmationButton' onClick={ () => this.filterFruits(this.state.userInput) }> Filter </button>
           <span className='resultBox filterStringRB'> filteredFruits: {JSON.stringify(this.state.filteredFruits) }</span>

           </div>
        )
    }
}