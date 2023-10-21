import React from 'react'
import NavBar from '../components/nav_bar'
import { Bread_crumbs } from '../components/breadcrumbs';
import Footer from '../components/footer';
import '../stylesheets/page/page__container.scss';
import Separador from '../components/separator';


export const HomePage = () => {
  return (
    <div className='page__container'>
      <NavBar />
      <Bread_crumbs />
      <h1 className='page__title'>Frontend Sample App</h1>
      <h2>Poner un resumen de lo que busca esta página, sobre algunas cosas relacionadas.</h2>
      <Separador altura="20px" />
      <Footer/>
    </div>
  )
}

export default HomePage
