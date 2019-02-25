import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../components/robots';
import Scroll from '../components/Scroll';
import './App.css';
import { setSearchField, setCounter} from '../action';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        count: state.countChange.count,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onCountChange: () => dispatch(setCounter())    
    }
}



class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
        }
    }
    componentDidMount() {
        console.log(this.props.store);
    }

    render() {
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = this.state.robots.filter(robots =>{
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

export default connect(mapStateToProps, mapDispatchToProps)(App);