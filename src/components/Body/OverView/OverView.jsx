import { Route, Routes } from "react-router-dom"

import PlaceHolder from './PlaceHolder'
import Products from './Products/Products';
import Markets from './Markets/Markets';
import Categories from './Categories/Categories';
import Users from './Users/Users';

function OverView() {
    return (
        <div className="overView">
            <Routes>
                <Route path="/" exact element = { <PlaceHolder /> } />
                <Route path="products/*" element = { <Products /> } />
                <Route path="markets/*" element = { <Markets /> } />
                <Route path="categories/*" element = { <Categories /> } />
                <Route path="users" element = { <Users /> } />
            </Routes>
        </div>
    )
}

export default OverView