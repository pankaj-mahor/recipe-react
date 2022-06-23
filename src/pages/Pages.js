import React from 'react'
import Category from '../components/Category'
import Home from './Home'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Cuisine from './Cuisine'
import SearchedPage from './SearchedPage'
import Recipe from './Recipe'
const Pages = () => {
  return (
    
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cuisine/:type' element={<Cuisine />}/>
        <Route path='/searched/:search' element={<SearchedPage />}/>
        <Route path='/recipe/:name' element={<Recipe />}/>
        
        {/* <Category />     */}
        {/* <Home /> */}
    </Routes>
  )
}

export default Pages