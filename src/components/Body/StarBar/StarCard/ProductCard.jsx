import React from "react"
import { Link } from "react-router-dom"

function ProductCard ({product}) {
    console.log({vendedor: product.vendedor});
    const market = product.mercado !== undefined ? product.mercado.nombre : ''
    const seller = product.vendedor !== undefined ? product.vendedor.nombreDeUsuario : ''
    return (
        <Link to={`/products/${product.identificador}`} className="starCard">
            <h4>Último producto creado</h4>
            <h6> &#11088; {product.nombre}</h6>
            <p>Con un precio de $<b>{product.precioPorKilo}</b></p>
            <p>Vendido en el mercado <b>{market}</b></p>
            <p>Traido por el negocio <b>{seller}</b></p>
        </Link>
    )
}

export default ProductCard