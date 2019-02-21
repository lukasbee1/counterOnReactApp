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
          <button className='bg-yellow dib bw0' onClick={() => {
            this.increment(); 
            this.props.updateData(this.state.count, 'add');
            
            }}> add </button>
            <button className='bg-yellow dib bw0' onClick={() => {
            this.decrement(); 
            this.props.updateData(this.state.count, 'remove');
            
            }}> remove </button>
      </div>
    );
  }
}

export default Counter;
