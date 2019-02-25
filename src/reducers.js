import {CHANGE_SEARCH_FIELD } from './constants';
import { CHANGE_COUNTER } from './constants';

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
    Count: 0
}

export const changeCount = (state=initialStateCounter, action={}) => {
    switch(action.type) {
        case CHANGE_COUNTER:
            return Object.assign({}, state, {Count: Count+1})
        default:
        return state;
    }
}




