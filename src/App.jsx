import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home'
import Login from './assets/pages/Login'
import GetStarted from './assets/pages/GetStarted'
import Descuentos from './assets/pages/Descuentos'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Verduras from './assets/pages/Verduras'
import Frutas from './assets/pages/Frutas'
import Meat from './assets/pages/Meat'
import Drinks from './assets/pages/Drinks'
import Bake from './assets/pages/Bake'
import Register from './assets/pages/Register'



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='Home' element={<Home/>}/>
          <Route path='Login' element={<Login/>}/>
          <Route path='/' element={<GetStarted/>}/>
          <Route path='Descuentos' element={<Descuentos/>}/>
          <Route path='Verduras' element={<Verduras/>} />
          <Route path='Frutas' element={<Frutas/>} />
          <Route path='Meat' element={<Meat/>} />
          <Route path='Drinks' element={<Drinks/>} />
          <Route path='Bake' element={<Bake/>} />
          <Route path='Register' element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App