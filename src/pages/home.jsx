import React from 'react'

import NavBar from '../components/nav_bar'
import { Link } from '@mui/material'

export const HomePage = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Frontend Sample App</h1>
      <NavBar />
      <h2>Página de Inicio</h2>
      <Link href='/mapa'>Mapa</Link>
    </div>
  )
}

export default HomePage
