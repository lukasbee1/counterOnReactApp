import React, { Component } from 'react';
import Counter from './Counter';

class Card extends Component {
    constructor() {
        super();
        this.state = {
            Count: 0,
            Price: 0,
        }
        this.updateData = this.updateData.bind(this);
    }
    updateData = (value) => {
        this.setState({ Count: value, Price: value*this.props.cost });
        this.props.updatePrice(value*this.props.cost)
    }


    render(){
        return (
            <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5 tc'>
                <img alt='robots' src={`https://robohash.org/${this.props.id+40}?200x200`} />
                <div>
                    <h2> {this.props.name}</h2>
                    cost: {this.props.cost} <br/>
                   
                    count: {this.state.Count} <br/>
                    price: {this.state.Price}
                    <Counter  updateData={this.updateData}  />
                    
                    
                </div>
            </div>
        );
    }
}

export default Card;