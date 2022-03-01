import React from "react"

function CategoryCard ({label, price, market, seller, name}) {
    return (
        <div className="starCard">
            <h4>Nuestra categoria estrella</h4>
            <h6> &#11088; {name}</h6>
            <p>Precio: {price}</p>
            <p>Vendido en: {market}</p>
            <p>Vendido por: {seller}</p>
        </div>
    )
}

export default CategoryCard