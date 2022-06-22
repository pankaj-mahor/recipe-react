import React from 'react'
import Category from '../components/Category'
import Home from './Home'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Cuisine from './Cuisine'
const Pages = () => {
  return (
    
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cuisine/:type' element={<Cuisine />}/>
        
        {/* <Category />     */}
        {/* <Home /> */}
    </Routes>
  )
}

export default Pages