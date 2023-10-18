import React from 'react';
import NavBar from '../components/nav_bar'
import { Bread_crumbs } from '../components/breadcrumbs';
import Footer from '../components/footer';
import '../stylesheets/page/page__container.scss';
import Separador from '../components/separator';

export const Sobre_Nosotros = () => {
    return (
        <div className='page__container'>
            <NavBar />
            <Bread_crumbs />
            <div>
                <h1 >Sobre Nosotros</h1>
                <p>Poner infor como la misión y visión, además de sobre la empresa (EcoIntelligence) y sobre nosotros 3</p>
            </div>
            <Separador altura="20px" />
            <Footer/>
        </div>
    );
};

export default Sobre_Nosotros;