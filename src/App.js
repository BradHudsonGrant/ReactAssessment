import React, { Component } from 'react';



export default class App extends Component {
  constructor(){
    super();

    this.state = {
        sentence : ""
    }

    this.addToDisplay = (digit) => this.setState({
        sentence : this.state.sentence + digit.target.value
    }); 

}

  calculateOperations(){
    var result = document.getElementById('result');
    this.setState({
      sentence: Math.eval(result)
      });
  }

  render() {
    return (
      <div>            
          <input id="result"  value={this.state.sentence} readonly></input>
            <div id="main">
                <div>
                <button value="1" onClick ={this.addToDisplay}>1</button>
                <button value="2" onClick ={this.addToDisplay}>2</button>
                <button value="3" onClick ={this.addToDisplay}>3</button>
                <button value="+" onClick ={this.addToDisplay}>+</button>
                </div>
                <div>
                <button value="4" onClick ={this.addToDisplay}>4</button>
                <button value="5" onClick ={this.addToDisplay}>5</button>
                <button value="6" onClick ={this.addToDisplay}>6</button>
                <button value="-" onClick ={this.addToDisplay}>-</button>
                </div>

                <div>
                <button value="7" onClick ={this.addToDisplay}>7</button>
                <button value="8" onClick ={this.addToDisplay}>8</button>
                <button value="9" onClick ={this.addToDisplay}>9</button>
                <button value="/" onClick ={this.addToDisplay}>/</button>
                </div>
                    
                <div>
                <button value="0" onClick ={this.addToDisplay}>0</button>
                <button value="=" onClick ={this.addToDisplay}>=</button>
                <button value="/" onClick ={this.calculateOperations}>/</button>
                </div>
              </div>
          </div>  
    );
  }
}
