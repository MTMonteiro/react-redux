import { actionsTypes } from '../constants/frutas'


const INICIAL_STATE = {
    frutas: [
        { id: 1, nome: 'Uva', quantidade: 20},
        { id: 2, nome: 'Maçã', quantidade: 5},
    ]
};


// no redux sempre temos q retornar um novo estado, não simplesmente alterar
const reducers = (state = INICIAL_STATE, action) => {

    switch (action.type) {
        case actionsTypes.ADICIONAR_FRUTA:
            return { frutas: [...state.frutas, { ...action.payload }]}
        
        case actionsTypes.REMOVER_FRUTA:
            // filtrar lista removendo elemento com id informado
            // filter sempre retorna um novo estado
            return { frutas: state.frutas.filter(x => x.id !== action.payload.id) };
        
        default:
            return state;
    }
}

export { reducers };