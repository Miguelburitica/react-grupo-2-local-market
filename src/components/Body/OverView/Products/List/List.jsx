import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function List () {
    const { id } = useParams()

     const [products, setProducts] = useState([])    

    useEffect(() => {
        fetch(`https://local-market-grupo-2.herokuapp.com/api/products`)
            .then(response => response.json())
            .then(products => {
                setProducts(products.body.data)
                console.log(products.body.data)
            })
            .catch(err => console.log(err))
    }, [])
    
    return (
        <React.Fragment>
            <h4 className='subTitle'>Otros productos</h4>
            {products.map((product, index) => {
                if(product.identificador !== id ) return (<Link to={`${product.identificador}`} key={product.nombreDeImagen} className="option">{product.nombre}</Link>)
                return 'jajaj'
            })}
        </React.Fragment>
    )
}

export default List