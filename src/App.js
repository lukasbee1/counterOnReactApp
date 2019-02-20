import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            globalPrice: 0,
            
        }
    }
    render() {
        return (
            <div className='tc'>
                <h1>RoboFrinds</h1>
                <CardList 
                    robots={this.state.robots}
                    countChange={this.onChangeCount}/>
                
            </div>    
        );
    }
}

export default App;