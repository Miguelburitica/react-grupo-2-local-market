import React from "react"

function ProductCard ({label, price, market, seller, name}) {
    return (
        <div className="starCard">
            <h4>Tu {label} más exitoso es:</h4>
            <h5>{name}</h5>
            <p>Precio: {price}</p>
            <p>Vendido en: {market}</p>
            <p>Vendido por: {seller}</p>
        </div>
    )
}

export default ProductCard