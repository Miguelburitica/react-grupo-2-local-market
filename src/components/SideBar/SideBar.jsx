import React from "react"
import { Link } from "react-router-dom"
import Header from "./Header/Header"

function SideBar () {
    return (
        <div className="sideBar">
            <Header />
            <nav className="navBar">
                <Link to="products" className="option" >Productos</Link>
                <Link to="markets" className="option" >Mercados</Link>
                <Link to="categories" className="option" >Categorias</Link>
                <Link to="users" className="option" >Usuarios</Link>
            </nav>
        </div>
    )
}

export default SideBar