import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  formatCount() {
    return this.state.count;
  }
  increment() {
    this.setState((state) => {
      return {count: state.count +1}
    });
    
  }
  decrement() {
    this.setState((state) => {
      return { count: state.count -1}
    });
  }
  render() {
    return (
      <div>
          <button onClick={() => {this.increment(); this.props.updateData(this.state.count);}}> inc </button>
          <button onClick={() => this.decrement()}> dec </button>
          
      </div>
    );
  }
}

export default Counter;
