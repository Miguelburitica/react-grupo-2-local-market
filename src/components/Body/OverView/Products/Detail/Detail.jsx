import React from 'react'
import { useParams } from 'react-router-dom';

function Detail ({products}) {
    
    const { id } = useParams()
    const product = products.length !== 0 ? products.find(item => item.identificador == id) : []
    const marketName = product.mercado !== undefined ? product.mercado.nombre : ''
    const sellerUserName = product.vendedor !== undefined ? product.vendedor.nombreDeUsuario : ''

    return (
        <React.Fragment>
            {products.length === 0 && <p>Cargando...</p>}
            {products.length !== 0 && (
            <React.Fragment>
                <img className='ilustration' src={`https://local-market-grupo-2.herokuapp.com/images/${product.nombreDeImagen}`} alt={`Imagen producto ${product.nombre}`} />
                <div className='properties'>
                    <h3 className='name'>{product.nombre}</h3>
                    <p>{`Vendido a ${product.precioPorKilo}`}</p>
                    <p>{`Vendido en el mercado ${marketName}`}</p>
                    <p>{`Vendido por ${sellerUserName}`}</p>
                </div>
            </React.Fragment>)}
        </React.Fragment>
    )
}

export default Detail