import React from 'react'
import { Link, useParams } from 'react-router-dom';

function Detail ({markets}) {
    

    const { id } = useParams()
    const market = markets.length !== 0 ? markets.find(item => item.id == id) : []
    const marketImage = 'https://www.elcolombiano.com/binrepository/999x703/0c0/998d562/none/11101/HRDL/mercados-10_37076419_20210124152545.jpg'
    return (
        <React.Fragment>
            {markets.length === 0 && <p>Cargando...</p>}
            {markets.length !== 0 && (
                <React.Fragment>
                    <img className='ilustration' src={marketImage} alt={`Imagen market ${market.name}`} />
                    <div className='properties'>
                        <h3 className='name'>{market.name}</h3>
                    </div>
                </React.Fragment>
                )
            }

        </React.Fragment>
    )
}

export default Detail