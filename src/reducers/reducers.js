import {CHANGE_SEARCH_FIELD } from '../constants/constants';
import { CHANGE_COUNTER } from '../constants/constants';

const initialStateSearch = {
    searchField: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload })
        default:
            return state;
    }
}

const initialStateCounter = {
    count: 0
}

export const changeCount = (state = initialStateCounter, action={}) => {
    console.log(action.type);
    switch(action.type) {
        case 'INCREMENT':
            return {count: state.coun + 1};
        case 'DECREMENT':
            return {count: state.count + 1};
        default:
            return state;
    }
}




