import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import Sobre_Nosotros from '../pages/sobre_nosotros'

import Informacion from '../pages/informacion'
import Papel_Carton from '../pages/informacion/papel_y_carton'

import Mapa from '../pages/mapa'
import Grafos from '../pages/prueba_grafos'

import Noticias from '../pages/noticias'
import Preguntas_Frecuentes from '../pages/preguntas_frecuentes'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sobre_nosotros' element={<Sobre_Nosotros/>} />
        <Route path='/informacion' element={<Informacion/>} />
        <Route path='/informacion/papel_y_carton' element={<Papel_Carton/>} />

        <Route path='/mapa' element={<Mapa/>} />
        <Route path='/grafos' element={<Grafos/>} />

        <Route path='/noticias' element={<Noticias/>} />
        <Route path='/preguntas_frecuentes' element={<Preguntas_Frecuentes/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
