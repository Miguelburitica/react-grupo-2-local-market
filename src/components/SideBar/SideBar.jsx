import React from "react"
import { Link } from "react-router-dom"
import Header from "./Header/Header"

function SideBar () {
    return (
        <div className="sideBar">
            <Header />
            <nav className="navBar">
                <Link to="product">Productos</Link>
                <Link to="market">Mercados</Link>
                <Link to="category">Categorias</Link>
                <Link to="seller">Vendedores</Link>
            </nav>
        </div>
    )
}

export default SideBar