import { useState, useEffect } from 'react';

function TotalSellers() {
    const [total, setTotal] = useState([]);

    const api = async function() {
        try {
            const list = await fetch("https://local-market-grupo-2.herokuapp.com/api/users/sellers")
            const apiResult = await list.json()
            console.log(apiResult)
            return apiResult[0]
        } catch (error) {
            throw 'Error en API'
        }
    }

    useEffect(()=>{
         async function fetchData(){
            const ultimoTotal = await api()
            setTotal(ultimoTotal)
         }
         fetchData();
     }, [])

    return (
        <div>
         <h3>
            Vendedores
            </h3>
            <h4> {total.count} </h4>
        </div>
    )
}

export default TotalSellers;