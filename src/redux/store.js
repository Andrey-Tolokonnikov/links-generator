import {createStore} from 'redux'
import linksReducer from './linksReducer'
const state = createStore(linksReducer)
export default state 