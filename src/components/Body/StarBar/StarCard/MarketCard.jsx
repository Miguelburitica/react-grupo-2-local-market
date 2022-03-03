import { Link } from "react-router-dom"

function MarketCard ({market}) {

    let products = market.products !== undefined ? market.products.length : ''
    
    return (
        <Link to={`/markets/${market.id}`} className="starCard">
            <h4>Nuestro mercado estrella</h4>
            <h6> &#11088; {market.name}</h6>
            <p></p>
            <p>Con {products} productos asociados</p>
        </Link>
    )
}

export default MarketCard