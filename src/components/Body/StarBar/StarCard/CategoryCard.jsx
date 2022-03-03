import React from "react"
import { Link } from "react-router-dom"

function CategoryCard ({category}) {

    let products = category.products !== undefined ? category.products.length : ''
    
    return (
       <Link to={`/categories/${category.id}`} className="starCard">
            <h4>Nuestra categoría más popular</h4>
            <h6> &#11088; {category.name}</h6>
            <p></p>
            <p>Con {products} productos asociados</p>
        </Link>
    )
}

export default CategoryCard