import React from 'react'
import { Link, useParams } from 'react-router-dom'

function List ({categories}) {
    const { id } = useParams()
    
    return (
        <React.Fragment>
            <h4 className='subTitle'>Otros Mercados</h4>
            {categories.length === 0 && <p>Cargando...</p>}

            {categories.length !== 0 && (categories.map((category, index) => {
                if(category.id !== id ) return (<Link to={`${category.id}`} key={category.id} className="option">{category.name}</Link>)
                return 'jajaj'
            }))}
        </React.Fragment>
    )
}

export default List