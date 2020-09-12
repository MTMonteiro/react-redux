import React from 'react'
import AdicionaFruta from './AdicionaFruta'
import Fruta from './Fruta'
import { useSelector } from 'react-redux'
const ListaFrutas = () => {

    const frutas = useSelector(state => state.frutaReducers.frutas)

    return (
        <>
            <h1>Lista de Frutas</h1>
            
            <AdicionaFruta/>
            
            {frutas.map(frutas => (
                <Fruta key={frutas.id} fruta={frutas} />
            ))}
        </>
    )
}

export default ListaFrutas;