import React from 'react';
import NavBar from '../components/nav_bar'
import { Bread_crumbs } from '../components/breadcrumbs';
import Box from '../components/box';
import LogoUSM from '../assets/usm.png'
import '../stylesheets/box.scss';

export const Informacion = () => {
    return (
        <>
            <NavBar />
            <Bread_crumbs />
            <div className='contendor' >
                <Box
                    imagen={LogoUSM}
                    titulo="Texto del recuadro 1"
                    cuerpo="A"
                />
                <Box
                    imagen={LogoUSM}
                    titulo="Texto del recuadro 2"
                    cuerpo="a"
                />
                <Box
                    imagen={LogoUSM}
                    titulo="Texto del recuadro 3"
                    cuerpo=""
                />
                <Box
                    imagen={LogoUSM}
                    titulo="Texto del recuadro 4"
                    cuerpo=""
                />
                <Box
                    imagen={LogoUSM}
                    titulo="Texto del recuadro 5"
                    cuerpo=""
                />
                <Box
                    imagen={LogoUSM}
                    titulo="Texto del recuadro 6"
                    cuerpo=""
                />
            </div>
        </>
    );
};

export default Informacion;