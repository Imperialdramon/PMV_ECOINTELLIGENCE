import React from 'react';
import NavBar from '../components/nav_bar'
import { Bread_crumbs } from '../components/breadcrumbs';
import Footer from '../components/footer';
import '../stylesheets/page/page__container.scss';
import Separador from '../components/separator';
import Typography from '@mui/material/Typography';

export const Preguntas_Frecuentes = () => {
    return (
        <div className='page__container'>
            <NavBar />
            <Bread_crumbs />
            <div className="content-wrap">
                <Typography align='center' variant='h1'>
                    Preguntas Frecuentes
                </Typography>
                <Typography align='justify' variant='h3'>
                    Preguntas random de prueba pruebabilísticas.
                </Typography>
            </div>
            <Separador altura="20px" />
            <Footer/>
        </div>
    );
};

export default Preguntas_Frecuentes;