import React from 'react'
import { useParams } from 'react-router-dom';

function Detail ({categories}) {
    

    const { id } = useParams()
    const category = categories.length !== 0 ? categories.find(item => item.id == id) : []
    const categoryImage = 'https://www.elcolombiano.com/binrepository/999x703/0c0/998d562/none/11101/HRDL/mercados-10_37076419_20210124152545.jpg'
    return (
        <React.Fragment>
            {categories.length === 0 && <p>Cargando...</p>}
            {categories.length !== 0 && (
                <React.Fragment>
                    <img className='ilustration' src={categoryImage} alt={`Imagen category ${category.name}`} />
                    <div className='properties'>
                        <h3 className='name'>{category.name}</h3>
                    </div>
                </React.Fragment>
                )
            }

        </React.Fragment>
    )
}

export default Detail