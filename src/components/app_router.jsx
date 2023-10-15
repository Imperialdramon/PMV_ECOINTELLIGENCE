import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import Mapa from '../pages/mapa'
import Grafos from '../pages/prueba_grafos'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/internal' element={<InternalPage />} />
        <Route path='/mapa' element={<Mapa/>} />
        <Route path='/grafos' element={<Grafos/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
