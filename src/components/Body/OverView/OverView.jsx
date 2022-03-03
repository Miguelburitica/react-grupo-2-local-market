import { Route, Routes } from "react-router-dom"

import PlaceHolder from './PlaceHolder'
import Products from './Products/Products';
import Markets from './Markets/Markets';
import Categories from './Categories/Categories';
import Sellers from './Sellers/Sellers';
import Customers from './Customers/Customers';

function OverView() {
    return (
        <div className="overView">
            <Routes>
                <Route path="/" exact element = { <PlaceHolder /> } />
                <Route path="products/*" element = { <Products /> } />
                <Route path="markets/*" element = { <Markets /> } />
                <Route path="categories/*" element = { <Categories /> } />
                <Route path="sellers" element = { <Sellers /> } />
                <Route path="Customers" element = { <Customers /> } />
            </Routes>
        </div>
    )
}

export default OverView