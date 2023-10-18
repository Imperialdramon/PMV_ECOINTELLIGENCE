import React from 'react';
import NavBar from '../components/nav_bar'
import { Bread_crumbs } from '../components/breadcrumbs';
import ImgMediaCard from '../components/card_image';
import LogoUSM from '../assets/usm.png'
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import Footer from '../components/footer';
import '../stylesheets/page/page__container.scss';
import Separador from '../components/separator';


export const Informacion = () => {
    return (
        <div className='page__container'>
            <NavBar />
            <Bread_crumbs />
            <div className="content-wrap">
                <h3>Texto genérico</h3>
                <Container maxWidth="false" sx={{display:'flex', justifycontent:'center'}}>
                    <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                            <ImgMediaCard
                                src_imagen={LogoUSM}
                                alto="200"
                                titulo="Papeles y Cartones"
                                texto="Ejemplo"
                                color="rgb(51, 218, 255)"
                                enlace="#"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ImgMediaCard
                                src_imagen={LogoUSM}
                                alto="200"
                                titulo="Vidrios"
                                texto="Ejemplo"
                                color="rgb(88, 255, 51)"
                                enlace="#"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ImgMediaCard
                                src_imagen={LogoUSM}
                                alto="200"
                                titulo="Latas"
                                texto="Ejemplo"
                                color="rgb(248, 60, 60)"
                                enlace="#"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ImgMediaCard
                                src_imagen={LogoUSM}
                                alto="200"
                                titulo="Plásticos"
                                texto="Ejemplo"
                                color="rgb(246, 255, 53)"
                                enlace="#"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ImgMediaCard
                                src_imagen={LogoUSM}
                                alto="200"
                                titulo="Materiales Orgánicos"
                                texto="Ejemplo"
                                color="rgb(255, 182, 0)"
                                enlace="#"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ImgMediaCard
                                src_imagen={LogoUSM}
                                alto="200"
                                titulo="Varios"
                                texto="Ejemplo"
                                color="rgb(182, 182, 182)"
                                enlace="#"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Separador altura="20px" />
            <Footer/>
        </div>
    );
};

export default Informacion;