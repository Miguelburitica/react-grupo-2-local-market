import React from "react"
import { Route, Routes } from "react-router-dom"
import Default from './Default'
import Products from './Products/Products';
import Markets from './Markets/Markets';
import Categories from './Categories/Categories';
import Sellers from './Sellers/Sellers';


function OverView() {
    return (
        <Routes>
            <Route path = "/" exact element = { Default } />
            <Route path="products" element = { Products } />
            <Route path="markets" element = { Markets } />
            <Route path="categories" element = { Categories } />
            <Route path="sellers" element = { Sellers } />
        </Routes>
    )
}

export default OverView