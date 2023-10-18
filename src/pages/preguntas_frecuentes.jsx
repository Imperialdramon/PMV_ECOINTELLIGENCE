import React from 'react';
import NavBar from '../components/nav_bar'
import { Bread_crumbs } from '../components/breadcrumbs';
import Footer from '../components/footer';
import '../stylesheets/page/page__container.scss';
import Separador from '../components/separator';

export const Preguntas_Frecuentes = () => {
    return (
        <div className='page__container'>
            <NavBar />
            <Bread_crumbs />
            <div>
                <h1 >Preguntas Frecuentes</h1>
                <p>Poner algo como menús deplegables, de pregunta-respuesta</p>
            </div>
            <Separador altura="20px" />
            <Footer/>
        </div>

    );
};

export default Preguntas_Frecuentes;