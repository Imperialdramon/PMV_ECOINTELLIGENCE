import React from 'react'
import NavBar from '../components/nav_bar'
import { Bread_crumbs } from '../components/breadcrumbs'
import ImgMediaCard from '../components/card_image'
import { Container } from '@mui/system'
import Grid from '@mui/material/Grid'
import Footer from '../components/footer'
import '../stylesheets/page/page__container.scss'
import {Typography, Paper} from "@mui/material"
import Separador from '../components/separator'
import img_basurero_paper from '../assets/recycle/recycle_paper.png'
import img_basurero_organic from '../assets/recycle/recycle_organic.png'
import img_basurero_plastic from '../assets/recycle/recycle_plastic.png'
import img_basurero_lata from '../assets/recycle/recycle_lata.png'
import img_basurero_others from '../assets/recycle/recycle_others.png'
import img_basurero_glass from '../assets/recycle/recycle_glass.png'

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
                <Typography variant='h3' align='center' sx={{fontWeight:'bold'}}>Información sobre el Reciclaje</Typography>
                <Separador altura="20px" />
                <Container maxWidth="80%" sx={{display:'flex', justifycontent:'center', alignContent:"justify", alignItems:"center"} }>
                    <Paper elevation={2} sx={{padding:"15px", margin:"5px", backgroundColor: "preguntas.main", color:"preguntas.contrastText"}}>
                        <Typography item variant='subtitle1' fontSize='25px'  lineHeight={1.2}>
                            En esta sección se encuentran los seis tipos de contenedores para el reciclaje, los cuales tienen un tipo de contenido específico y diferentes motivos por los cuales se recomiendan reciclar debido a su impacto en el medioambiente. 
                        </Typography>
                    </Paper>
                </Container>
                <Separador altura="20px" />
                <Container maxWidth="false" sx={{display:'flex', justifycontent:'center'}}>
                    <Grid container alignItems="stretch" direction="row" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                            <ImgMediaCard
                                titulo="Papel y Cartón"
                                color="rgba(91, 163, 229, 0.5)"
                                enlace="/informacion/papel_y_carton"
                                img={img_basurero_paper}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ImgMediaCard
                                titulo="Vidrio"
                                color="rgb(88, 255, 51)"
                                enlace='/informacion/vidrio'
                                img={img_basurero_glass}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ImgMediaCard
                                titulo="Lata"
                                color="#D32F2F"
                                enlace='/informacion/lata'
                                img={img_basurero_lata}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ImgMediaCard
                                titulo="Plástico"
                                color="#FFFF00" 
                                enlace='/informacion/plastico'
                                img={img_basurero_plastic}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ImgMediaCard
                                titulo="Material Orgánico"
                                color="rgb(255, 182, 0)"
                                enlace='/informacion/material_organico'
                                img={img_basurero_organic}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ImgMediaCard
                                titulo="Varios"
                                color="#607D8B"
                                enlace='/informacion/varios'
                                img={img_basurero_others}
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