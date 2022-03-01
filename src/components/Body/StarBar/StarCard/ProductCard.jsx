import React from "react"

function ProductCard ({price, market, seller, name}) {
    return (
        <div className="starCard">
            <h4>Nuestro producto estrella</h4>
            <h6> &#11088; {name}</h6>
            <p>Con un precio de {price}</p>
            <p>Vendido en el mercado {market}</p>
            <p>Vendido por el Sr(a) {seller}</p>
        </div>
    )
}

export default ProductCard