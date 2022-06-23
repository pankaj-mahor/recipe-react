import React from 'react'
import Category from '../components/Category'
import Home from './Home'
import { BrowserRouter , Route, Routes, useLocation } from 'react-router-dom'
import Cuisine from './Cuisine'
import SearchedPage from './SearchedPage'
import Recipe from './Recipe'
import { AnimatePresence } from 'framer-motion'
const Pages = () => {
  const location = useLocation();
  // console.log(location , location.pathname)
  return (
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />}/>
        <Route path='/cuisine/:type' element={<Cuisine />}/>
        <Route path='/searched/:search' element={<SearchedPage />}/>
        <Route path='/recipe/:name' element={<Recipe />}/>
        
        {/* <Category />     */}
        {/* <Home /> */}
    </Routes>
    </AnimatePresence>
  )
}

export default Pages