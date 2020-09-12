import { createStore } from 'redux';
import { reducers } from '../reducers'

const store = createStore(reducers, 
    // se tiver extensão instalada executea
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export { store };