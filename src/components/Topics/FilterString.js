import React, { Component } from 'react';

class FilterString extends Component {
    
    constructor() {
        super();

        this.state = {
            unfilterdArray: ['Janson', 'Jordan', 'Kyle', 'Rylee', 'Hyrum'],
            userInput: '',
            filteredArray: [],

        }
    }

    handleChange(val){
        this.setState({userInput: val })
    }

    filterArray(userInput){
        let names = this.state.unfilterdArray;
        let filteredArray = [];

        for(let i = 0; i < names.length; i++){
            if(names[i].includes(userInput)){
                filteredArray.push(names[i])
            }
        }
        this.setState({ filteredArray: filteredArray });
    }
    
    
    
    render () {
        return (
            <div className = 'puzzleBox filterStringPB'>
            <h4> Filter String </h4>
            <span className = 'puzzleText'> Names: { JSON.stringify(this.state.unfilterdArray, null, 10) } </span>
            <input className  onChange={ (e) => this.handleChange(e.target.value) } />
            <button className = 'confirmationButton' onClick={ () => this.filterArray(this.state.userInput) }> Filter </button>
            <span className = 'resultsBox filterStringRB'> Filtered Names: { JSON.stringify(this.state.filteredArray, null, 10) } </span>

            </div>
        )
    }
}

export default FilterString