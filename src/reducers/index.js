import { combineReducers } from 'redux';
import { reducers as frutaReducers} from './fruta.reducer'

// como tem q retornar apenas um arquivo
// o ideal é combinar os reducers

const reducers = combineReducers({
    frutaReducers,
});

export { reducers };