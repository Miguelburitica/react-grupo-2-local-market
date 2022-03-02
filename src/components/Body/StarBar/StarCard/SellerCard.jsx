import React from "react"
import TotalSellers from '../../OverView/Users/totalSellers/totalSellers'

function SellerCard ({label, price, market, seller, name}) {
    return (
        <div className="starCard">
            <h4>Total vendedores</h4>
            <h6><TotalSellers/> &#11088; {name}</h6>
            <p>Precio: {price}</p>
            <p>Vendido en: {market}</p>
            <p>Vendido por: {seller}</p>
        </div>
    )
}

export default SellerCard