import React from 'react'
import NavBar from '../components/nav_bar'
import { Bread_crumbs } from '../components/breadcrumbs'
import ImgMediaCard from '../components/card_image'
import { Container } from '@mui/system'
import Grid from '@mui/material/Grid'
import Footer from '../components/footer'
import '../stylesheets/page/page__container.scss'
import Separador from '../components/separator'

// Imágenes
import Papel from '../assets/papel_carton.jpg'
import Vidrio from '../assets/vidrios.jpg'
import Latas from '../assets/latas.jpg'
import Plasticos from '../assets/plasticos.jpg'
import Organicos from '../assets/organicos.jpg'
import Varios from '../assets/varios.jpg'

export const Informacion = () => {
    return (
        <div className='page__container'>
            <NavBar />
            <Bread_crumbs />
            <div className="content-wrap">
                <h3>Texto genérico</h3>
                <text>Algo</text>
                <Separador altura="20px" />
                <Container maxWidth="false" sx={{display:'flex', justifycontent:'center'}}>
                    <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                            <ImgMediaCard
                                src_imagen={Papel}
                                alto="200"
                                alto_max={'200px'}
                                titulo="Papel y Cartón"
                                texto="Ejemplo"
                                color="rgb(51, 218, 255)"
                                enlace="/informacion/papel_y_carton"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ImgMediaCard
                                src_imagen={Vidrio}
                                alto="200"
                                alto_max={'200px'}
                                titulo="Vidrio"
                                texto="Ejemplo"
                                color="rgb(88, 255, 51)"
                                enlace='/informacion/vidrio'
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ImgMediaCard
                                src_imagen={Latas}
                                alto="200"
                                alto_max={'200px'}
                                titulo="Lata"
                                texto="Ejemplo"
                                color="rgb(248, 60, 60)"
                                enlace='/informacion/lata'
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ImgMediaCard
                                src_imagen={Plasticos}
                                alto="200"
                                alto_max={'200px'}
                                titulo="Plástico"
                                texto="Ejemplo"
                                color="rgb(246, 255, 53)"
                                enlace='/informacion/plastico'
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ImgMediaCard
                                src_imagen={Organicos}
                                alto="200"
                                alto_max={'200px'}
                                titulo="Material Orgánico"
                                texto="Ejemplo"
                                color="rgb(255, 182, 0)"
                                enlace='/informacion/material_organico'
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ImgMediaCard
                                src_imagen={Varios}
                                alto="200"
                                alto_max={'200px'}
                                titulo="Varios"
                                texto="Ejemplo"
                                color="rgb(182, 182, 182)"
                                enlace='/informacion/varios'
                            />
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Separador altura="20px" />

            <Footer/>
        </div>
    )
}

export default Informacion