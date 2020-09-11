import React from 'react'
import AdicionaFruta from './AdicionaFruta'
import Fruta from './Fruta'
const ListaFrutas = () => {

    const frutas = [
        { id:1, nome: 'Abacaxi', quantidade: 5},
        { id:2, nome: 'Maçã', quantidade: 12},
    ]

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