import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../components/robots';
import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField } from '../actions'

const mapStateToProps = state => {
    return {
        searchField:state.searchRobots.searchField
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots
            
        }
    }
    
    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchField.toLowerCase());
        })
        
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFrinds</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <CardList 
                        robots={filteredRobots}
                        countChange={this.onChangeCount}/>
                </Scroll>
            </div>    
        );
    }
}

export default connect(mapStateToProps, MapDispatchToProps)(App);