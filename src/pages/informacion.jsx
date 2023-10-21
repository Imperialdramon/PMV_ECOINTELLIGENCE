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
                                titulo="Papel y Cartón"
                                color="rgb(51, 218, 255)"
                                color_border="rgb(0, 0, 0)"
                                enlace="/informacion/papel_y_carton"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ImgMediaCard
                                titulo="Vidrio"
                                color_border="rgb(0, 0, 0)"
                                color="rgb(88, 255, 51)"
                                enlace='/informacion/vidrio'
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ImgMediaCard
                                titulo="Lata"
                                color="rgb(248, 60, 60)"
                                color_border="rgb(0, 0, 0)"
                                enlace='/informacion/lata'
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ImgMediaCard
                                titulo="Plástico"
                                color="rgb(246, 255, 53)" 
                                color_border="rgb(0, 0, 0)"
                                enlace='/informacion/plastico'
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ImgMediaCard
                                titulo="Material Orgánico"
                                color="rgb(255, 182, 0)"
                                color_border="rgb(0, 0, 0)"
                                enlace='/informacion/material_organico'
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ImgMediaCard
                                titulo="Varios"
                                color="rgb(182, 182, 182)"
                                color_border="rgb(0, 0, 0)"
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