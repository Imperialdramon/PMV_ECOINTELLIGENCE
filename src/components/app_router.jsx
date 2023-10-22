import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/home'
import Sobre_Nosotros from '../pages/sobre_nosotros'
import Informacion from '../pages/informacion'
import Papel_Carton from '../pages/Informacion/papel_y_carton'
import Vidrio from '../pages/Informacion/vidrio'
import Lata from '../pages/Informacion/lata'
import Plastico from '../pages/Informacion/plastico'
import Material_Organico from '../pages/Informacion/material_organico'
import Varios from '../pages/Informacion/varios'
import Mapa from '../pages/mapa'
import Noticias from '../pages/noticias'
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
          <Route path='/noticias' element={<Noticias/>} />
          <Route path='/preguntas_frecuentes' element={<Preguntas_Frecuentes/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default AppRouter
