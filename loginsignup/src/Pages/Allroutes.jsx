import React from 'react'
import {Route, Routes} from "react-router-dom"
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import Aboutus from './Aboutus'
import Products from './Products'
const Allroutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element = {<Signup/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<Aboutus/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes
