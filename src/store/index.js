import {createStore} from 'redux'
import reducer from '../reducers' //folders always look at index.js

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())