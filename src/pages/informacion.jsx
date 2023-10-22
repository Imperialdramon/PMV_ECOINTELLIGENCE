import React from 'react'
import NavBar from '../components/nav_bar'
import { Bread_crumbs } from '../components/breadcrumbs'
import ImgMediaCard from '../components/card_image'
import { Container } from '@mui/system'
import Grid from '@mui/material/Grid'
import Footer from '../components/footer'
import '../stylesheets/page/page__container.scss'
import Separador from '../components/separator'
import img_basurero_paper from '../assets/recycle_paper.png'
import img_basurero_organic from '../assets/recycle_organic.png'
import img_basurero_plastic from '../assets/recycle_plastic.png'
import img_basurero_lata from '../assets/recycle_lata.png'
import img_basurero_others from '../assets/recycle_others.png'
import img_basurero_glass from '../assets/recycle_glass.png'

const containerStyles = {
    display: 'flex',
    justifyContent: 'center', // Centra horizontalmente
    alignItems: 'center',     // Centra verticalmente
    height: '10%',         // Establece una altura al 100% de la vista
}

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
                            <div style={containerStyles}>
                                <img
                                    src={img_basurero_paper} // Reemplaza con la ruta de tu imagen
                                    width="60%" // Ancho deseado en píxeles
                                    height="10%" // Alto deseado en píxeles
                                />
                            </div>
                            <ImgMediaCard
                                titulo="Papel y Cartón"
                                color="rgba(91, 163, 229, 0.5)"
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