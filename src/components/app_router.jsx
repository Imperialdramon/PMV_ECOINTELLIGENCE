import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import Sobre_Nosotros from '../pages/sobre_nosotros'
import Informacion from '../pages/informacion'
import Papel_Carton from '../pages/informacion/papel_y_carton'
import Vidrio from '../pages/Informacion/vidrio'
import Lata from '../pages/Informacion/lata'
import Plastico from '../pages/Informacion/plastico'
import Material_Organico from '../pages/Informacion/material_organico'
import Varios from '../pages/Informacion/varios'
import Mapa from '../pages/mapa'
import Grafos from '../pages/prueba_grafos'

import Noticias from '../pages/noticias'
//import from noticias
import News_01 from '../pages/Noticias/new_01';
import News_02 from '../pages/Noticias/new_02';
import News_03 from '../pages/Noticias/new_03';
import News_04 from '../pages/Noticias/new_04';
import News_05 from '../pages/Noticias/new_05';
import News_06 from '../pages/Noticias/new_06';


import Preguntas_Frecuentes from '../pages/preguntas_frecuentes'

//tema
import paleta_main from '../components/theme';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const AppRouter = () => {
  return (
    <ThemeProvider theme={paleta_main}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/sobre_nosotros' element={<Sobre_Nosotros/>} />
          <Route path='/informacion' element={<Informacion/>} />
          <Route path='/informacion/papel_y_carton' element={<Papel_Carton/>} />
          <Route path='/informacion/vidrio' element={<Vidrio/>} />
          <Route path='/informacion/lata' element={<Lata/>} />
          <Route path='/informacion/plastico' element={<Plastico/>} />
          <Route path='/informacion/material_organico' element={<Material_Organico/>} />
          <Route path='/informacion/varios' element={<Varios/>} />
          <Route path='/mapa' element={<Mapa/>} />
          <Route path='/grafos' element={<Grafos/>} />
          <Route path='/noticias' element={<Noticias/>} />
          <Route path='/noticias/new_01' element={<News_01 />} />
          <Route path='/noticias/new_02' element={<News_02 />} />
          <Route path='/noticias/new_03' element={<News_03 />} />
          <Route path='/noticias/new_04' element={<News_04 />} />
          <Route path='/noticias/new_05' element={<News_05 />} />
          <Route path='/noticias/new_06' element={<News_06 />} />
          <Route path='/preguntas_frecuentes' element={<Preguntas_Frecuentes/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default AppRouter
