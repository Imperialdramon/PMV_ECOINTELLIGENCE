import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import Mapa from '../pages/mapa'
import Informacion from '../pages/informacion'
import Papel_Carton from '../pages/papel_y_carton'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/mapa' element={<Mapa/>} />
        <Route path="/informacion" element={<Informacion/>} />
        <Route path="/papel_y_carton" element={<Papel_Carton/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
