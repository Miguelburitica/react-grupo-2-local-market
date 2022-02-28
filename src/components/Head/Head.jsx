import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SideBar from './SideBar/SideBar'
import StarBar from './StarBar/StarBar'

function Head () {
    return (
        <Routes>
            <Route path='/' exact element={ <StarBar /> } />
            <Route path='/SideBar' element={ <SideBar /> } />
        </Routes>
    )
}

export default Head