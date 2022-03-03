import React, { useEffect, useState } from "react"
import ProductCard from "./StarCard/ProductCard"
import MarketCard from "./StarCard/MarketCard"
import CategoryCard from "./StarCard/CategoryCard"
import UserCard from "./StarCard/UserCard"

function StarBar () {

    const [product, setProduct] = useState({})
    const [market, setMarket] = useState({})
    const [category, setCategory] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            // products
            let productPromise = await fetch('https://local-market-grupo-2.herokuapp.com/api/products')
            let productResponse = await productPromise.json()
            let productData = productResponse.body.data
            let lastProduct = productData[productData.length - 1]
            setProduct(lastProduct)
            
            // markets
            let marketPromise = await fetch('https://local-market-grupo-2.herokuapp.com/api/markets')
            let marketResponse = await marketPromise.json()
            let marketData = marketResponse.body.data
            let lengthMarkets = marketData.map(market => market.products.length)
            let betterIdMarket = Math.max(...lengthMarkets)
            let betterMarket = marketData.find(market => market.products.length === betterIdMarket)
            setMarket(betterMarket)

            // categories
            let categoryPromise = await fetch('https://local-market-grupo-2.herokuapp.com/api/categories')
            let categoryResponse = await categoryPromise.json()
            let categoryData = categoryResponse.body.data
            let goodCategories = categoryData.map(category => {
                    let badName = category.name
                    let arrayBadName = badName.split('')
                    arrayBadName[0] = arrayBadName[0].toUpperCase()
                    let goodName = arrayBadName.join('')
                    category.name = goodName
                    return category
                })
            let lengthCategories = goodCategories.map(Category => Category.products.length)
            let betterIdCategory = Math.max(...lengthCategories)
            let betterCategory = categoryData.find(Category => Category.products.length === betterIdCategory)
            setCategory(betterCategory)

            // setProduct(lastProduct)
        }
        fetchData()        
    }, [])

    let starBar = document.querySelector('.starBar')
    
    return (
        <div className="starBar">
            <ProductCard product={product} />
            <MarketCard market={market} />
            <CategoryCard category={category}/>
            <UserCard />
        </div>
    )
}

export default StarBar