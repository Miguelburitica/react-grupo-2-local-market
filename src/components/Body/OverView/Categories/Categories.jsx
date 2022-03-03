import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom";
import Detail from "./Detail/Detail";
import List from "./List/List";
import PlaceHolder from "./PlaceHolder";

function Categories () {
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        fetch(`https://local-market-grupo-2.herokuapp.com/api/categories`)
            .then(response => response.json())
            .then(categories => {
                let goodCategories = categories.body.data.map(category => {
                    let badName = category.name
                    let arrayBadName = badName.split('')
                    arrayBadName[0] = arrayBadName[0].toUpperCase()
                    let goodName = arrayBadName.join('')
                    category.name = goodName
                    return category
                })
                setCategories(goodCategories)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <React.Fragment>
                <div className="detail">
                    <Routes>
                        <Route path="/" exact element={ <PlaceHolder /> } />
                        <Route path={`/:id`} element={ <Detail categories = { categories } /> } />)
                    </Routes>
                </div>
                <div className="list">
                    <List categories={categories}/>
                </div>
        </React.Fragment>
    )
}

export default Categories