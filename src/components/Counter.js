import React, { Component } from 'react';
import { connect } from 'react-redux'

const mapStateToProps =(state) => {
  return {
    count: state.count
  }
}
const mapDispatchToProps = () => {
  return {
    onIncrement: () => dispathc(increment())
  }
}
class Counter extends Component {
  state = {
    count: 0,
  }

  increment =() => {
    this.props.dispatch({ type:'INCREMENT'})
  }
  decrement =() => {
    this.props.dispatch({type:'DECREMENT'})
  }

  render() {
    return (
      <div>
          <button className='bg-yellow dib bw1' onClick={this.increment}> add </button>
          {this.state.count}
          <button className='bg-yellow dib bw1' onClick={this.decrement}> remove </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
