import { actionsTypes } from '../constants/frutas'

const actions = {
    adicionar: fruta => ({
        type: actionsTypes.ADICIONAR_FRUTA,
        // dados, não são obrigatórios
        payload: fruta
    }),
    remover: fruta => ({
        type: actionsTypes.REMOVER_FRUTA,
        payload: fruta,
    }),
};

export { actions };