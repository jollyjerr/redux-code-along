import {createStore} from 'redux'
import {counter} from '../reducers/counter'

export default createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())