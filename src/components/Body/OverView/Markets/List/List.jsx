import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function List () {
    const { id } = useParams()

     const [markets, setMarkets] = useState([])    

    useEffect(() => {
        fetch(`https://local-market-grupo-2.herokuapp.com/api/markets`)
            .then(response => response.json())
            .then(markets => {
                setMarkets(markets.body.data)
                console.log(markets.body.data)
            })
            .catch(err => console.log(err))
    }, [])
    
    return (
        <React.Fragment>
            <h4 className='subTitle'>Otros Mercados</h4>
            {markets.map((market, index) => {
                if(market.id !== id ) return (<Link to={`${market.id}`} key={market.id} className="option">{market.name}</Link>)
                return 'jajaj'
            })}
        </React.Fragment>
    )
}

export default List