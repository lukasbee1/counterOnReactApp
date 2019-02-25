import { CHANGE_SEARCH_FIELD } from './constants';
import { CHANGE_COUNTER } from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const setCounter = () => ({
    type: CHANGE_COUNTER,
})

