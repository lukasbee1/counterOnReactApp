import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numeral: 0,
    };
  }
  increm() {
    this.setState((state) => {
      return {numeral: state.numeral +1}
    });
  }
  decrem() {
    this.setState((state) => {
      return { numeral: state.numeral -1}
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button 
          onClick={() => this.increm()}
          >
            +
          </button>
          {this.state.numeral}
          <button
          onClick={() => this.decrem()}
          >
            -
          </button>
        </header>
      </div>
    );
  }
}

export default App;
