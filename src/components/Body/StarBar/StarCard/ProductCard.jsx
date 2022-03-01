import React from "react"

function ProductCard ({price, market, seller, name}) {
    return (
        <div className="starCard">
            <h4>El producto más exitoso ha sido: {name}</h4>
            <p>Con un precio de {price}</p>
            <p>Vendido en el mercado {market}</p>
            <p>Vendido por el Sr(a) {seller}</p>
        </div>
    )
}

export default ProductCard