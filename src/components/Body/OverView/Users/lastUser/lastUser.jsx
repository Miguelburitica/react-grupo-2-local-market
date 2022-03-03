import { useState, useEffect } from 'react';
import OneUser from '../oneUser/oneUser';

function LastUser() {
    const [last, setLast] = useState([]);

    const api = async function() {
        try {
            const list = await fetch("https://local-market-grupo-2.herokuapp.com/api/users/lastuser")
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
            setLast(ultimoTotal)
         }
         fetchData();
     }, [])

    return (
        <div>
          {last.map(function(user,index){ 
        return <OneUser key={index} names={user.names} surname={user.surname} email={user.email} user_name={user.user_name}/>} 
        )}
        </div>
    
    )
}

export default LastUser;