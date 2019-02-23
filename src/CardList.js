import React, { Component } from 'react';
import Card from './Card';


class CardList extends Component {
    constructor() {
        super();
        this.state = {
            globalPrice: 0,
        }
        this.updatePrice = this.updatePrice.bind(this);
    }
    
    updatePrice = (value, oper) => {
        if (oper === 'add')
            this.setState({ globalPrice: this.state.globalPrice + value })
        else if (oper === 'remove')
            this.setState({ globalPrice: this.state.globalPrice - value })
    }
    
    
    render() {
        return (
            <div>
            <h2>{this.state.globalPrice}</h2>
            {
                this.props.robots.map((user, i) => {
                    return(
                        <Card 
                            key={this.props.i} 
                            id={this.props.robots[i].id} 
                            name={this.props.robots[i].name} 
                            cost={this.props.robots[i].cost}
                            email={this.props.robots[i].email}
                            updatePrice={this.updatePrice}
                            />
                    );
                })
            }
            </div>
        );
    }
}

export default CardList;