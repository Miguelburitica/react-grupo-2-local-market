import React, { useEffect, useState } from "react"
import ProductCard from "./StarCard/ProductCard"
import MarketCard from "./StarCard/MarketCard"
import CategoryCard from "./StarCard/CategoryCard"
import UserCard from "./StarCard/UserCard"

function StarBar () {

    const [product, setProduct] = useState({})
    const [market, setMarket] = useState({})
    // const [category, setCategory] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            let productPromise = await fetch('https://local-market-grupo-2.herokuapp.com/api/products')
            let marketPromise = await fetch('https://local-market-grupo-2.herokuapp.com/api/markets')
            let categoryPromise = await fetch('https://local-market-grupo-2.herokuapp.com/api/categories')
            let productResponse = await productPromise.json()
            let marketResponse = await marketPromise.json()
            let categoryResponse = await categoryPromise.json()
            let productData = productResponse.body.data
            let marketData = marketResponse.body.data
            let categoryData = categoryResponse.body.data
            let lastProduct = productData[productData.length - 1]
            let lengthMarkets = marketData.map(market => market.products.length)
            let betterIdMarket = Math.max(...lengthMarkets)
            let betterMarket = marketData.find(market => market.products.length === betterIdMarket)
            setProduct(lastProduct)
            setMarket(betterMarket)
            // setProduct(lastProduct)
        }
        fetchData()        
    }, [])
    console.log(market);
    
    return (
        <div className="starBar">
            <ProductCard product={product} />
            <MarketCard market={market} />
            {/* <CategoryCard category={category}/> */}
            <UserCard />
        </div>
    )
}

export default StarBar