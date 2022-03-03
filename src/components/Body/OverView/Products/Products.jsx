import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom";
import Detail from "./Detail/Detail";
import List from "./List/List";
import PlaceHolder from "./PlaceHolder";

function Products () {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch(`https://local-market-grupo-2.herokuapp.com/api/products`)
            .then(response => response.json())
            .then(products => {
                setProducts(products.body.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <React.Fragment>
                <div className="detail">
                    <Routes>
                        <Route path="/" exact element={ <PlaceHolder /> } />
                        <Route path={`/:id`} element={ <Detail products = { products } /> } />)
                    </Routes>
                </div>
                <div className="list">
                    <List />
                </div>
        </React.Fragment>
    )
}

export default Products