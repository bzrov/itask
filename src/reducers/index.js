import {combineReducers} from 'redux';

import boards from './boards'
import lists from './lists'
import cards from './cards'

export default combineReducers({
    boards,
    lists,
    cards
})
