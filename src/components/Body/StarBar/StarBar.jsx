import React from "react"
import ProductCard from "./StarCard/ProductCard"
import MarketCard from "./StarCard/MarketCard"
import CategoryCard from "./StarCard/CategoryCard"
import SellerCard from "./StarCard/SellerCard"
import CustomerCard from "./StarCard/CustomerCard"

function StarBar () {
    const product = {
        name: 'Pepinos',
        price: 1500,
        market: 'Villa Julia',
    }
    const market = {
        name: 'Villa Julia',
        deals: 1500000
    }
    return (
        <div className="starBar">
            <ProductCard name={product.name} price={product.price} market={product.market} />
            <MarketCard name={market.name} deals={market.deals} />
            <CategoryCard />
            <CustomerCard />
            <SellerCard />
        </div>
    )
}

export default StarBar