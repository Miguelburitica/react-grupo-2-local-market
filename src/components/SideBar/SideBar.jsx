import React from "react"
import { Link } from "react-router-dom"
import Header from "./Header/Header"

function SideBar () {
    return (
        <div className="sideBar">
            <Header />
            <nav className="navBar">
                <Link to="product" className="option" >Productos</Link>
                <Link to="market" className="option" >Mercados</Link>
                <Link to="category" className="option" >Categorias</Link>
                <Link to="seller" className="option" >Vendedores</Link>
            </nav>
        </div>
    )
}

export default SideBar