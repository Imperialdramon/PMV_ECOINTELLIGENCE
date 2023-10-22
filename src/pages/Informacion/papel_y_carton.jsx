import React from 'react'
import NavBar from '../../components/nav_bar'
import { Bread_crumbs } from '../../components/breadcrumbs'
import Footer from '../../components/footer'
import '../../stylesheets/page/page__container.scss'
import Separador from '../../components/separator'
import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import '../../stylesheets/listas.scss'
import Imagen from "../../assets/papel_carton.jpg"


const containerStyles = {
    display: 'flex',
    justifyContent: 'center', // Centra horizontalmente
    alignItems: 'center',     // Centra verticalmente
    height: '10%',         // Establece una altura al 100% de la vista
}

function ListaDePalabras({ palabras }) {
    return (
        <ul>
            {palabras.map((palabra, index) => (
                <li key={index}>
                    <Typography variant="body2" align="justify">
                        {palabra}
                    </Typography>
                </li>
            ))}
        </ul>
    )
}

const lista_1 = ['Papel de Periódico', 'Papel de Revista', 'Papel de Impresora y Fotocopiadora', 'Sobres de Papel'];
const lista_2 = ['Cuadernos y Papel de Escritura', 'Folletos y Panfletos', 'Papel de Envoltura de Regalos', 'Cajas de Cartón Corrugado'];
const lista_3 = ['Cajas de Cereales', 'Cartón de Huevos', 'Envases de Productos Electrónicos', 'Tubos de Cartón'];

export const Papel_Carton = () => {
    return (
        <div className='page__container'>
            <NavBar />
            <Bread_crumbs />
            <div className="content-wrap">

                <Typography align='center' variant='h3'>
                    Papel y Cartón
                </Typography>
                <Separador altura="20px" />
                <Container maxWidth="false" sx={{display:'flex', justifycontent:'center', width: "90%"}}>
                    <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={3}>
                            <div style={containerStyles}>
                                <img
                                    src={Imagen} // Reemplaza con la ruta de tu imagen
                                    width="60%" // Ancho deseado en píxeles
                                    height="10%" // Alto deseado en píxeles
                                />
                            </div>
                        </Grid>
                        
                        <Grid item xs={9}>
                            <Paper elevation={0} sx={{padding:"10px", margin:"5px"}}>
                                <Typography align='center' variant='h5' sx={{fontWeight:'bold'}}>
                                    ¿Qué tipo de material se encuentra en esta categoría?
                                </Typography>
                                <br/>
                                <Typography align='justify' variant='body1'>
                                    En esta categoría están clasificados materiales principalmente de fibra de celulosa y utilizados debido a su versatilidad en una amplia gama de aplicaciones.
                                    Estas aplicaciones incluyen materiales de uso doméstico, como materiales para envío de productos, donde algunos de estos se encuentran listados en la siguiente lista:
                                </Typography>
                                <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 0.5, sm: 2, md: 3 }}>
                                    <Grid item xs={4}>
                                        <ListaDePalabras palabras={lista_1}/>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <ListaDePalabras palabras={lista_2}/>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <ListaDePalabras palabras={lista_3}/>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Separador altura="20px" />
                        <Grid item xs={6}>
                            <Paper elevation={0}sx={{padding:"10px", margin:"5px"}}>
                                <Typography align='center' variant='h5' sx={{fontWeight:'bold'}}>
                                    ¿Como se deben preparar los materiales para ser reciclados?
                                </Typography>
                                <Typography align='justify' variant='subtitle1'>
                                    a
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={6}>
                            <Paper elevation={0}sx={{padding:"10px", margin:"5px"}}>
                                <Typography align='center' variant='h5' sx={{fontWeight:'bold'}}>
                                    ¿Por qué es importante reciclar este tipo de materiales?
                                </Typography>
                                <Typography align='justify' variant='subtitle1'>
                                    a
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Separador altura="20px" />
            <Footer/>
        </div>

    );
};

export default Papel_Carton
/*
                        
                        */