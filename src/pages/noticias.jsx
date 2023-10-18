import React from 'react';
import NavBar from '../components/nav_bar'
import { Bread_crumbs } from '../components/breadcrumbs';
import Footer from '../components/footer';
import '../stylesheets/page/page__container.scss';
import Separador from '../components/separator';

export const Noticias = () => {
    return (
        <div className='page__container'>
            <NavBar />
            <Bread_crumbs />
            <div>
                <h1 >Noticias</h1>
                <p>Poner pequeñas cartas similares a lo usado en información con al menos 3 noticias</p>
            </div>
            <Separador altura="20px" />
            <Footer/>
        </div>
    );
};

export default Noticias;