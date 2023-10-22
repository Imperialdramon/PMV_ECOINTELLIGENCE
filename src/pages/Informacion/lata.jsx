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
import img_basurero from '../../assets/recycle_lata.png'

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


export const Lata = () => {
    return (
        <div className='page__container'>
            <NavBar />
            <Bread_crumbs />
            <div className="content-wrap">
                <Typography align='center' variant='h3'>
                    Latas
                </Typography>
                <Separador altura="20px" />
                <Container maxWidth="false" sx={{display:'flex', justifycontent:'center', width: "95%"}}>
                    <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={3}>
                            <div style={containerStyles}>
                                <img
                                    src={img_basurero} // Reemplaza con la ruta de tu imagen
                                    width="60%" // Ancho deseado en píxeles
                                    height="10%" // Alto deseado en píxeles
                                />
                            </div>
                        
                        </Grid>
                        
                        <Grid item xs={9}>
                            <Paper elevation={2} sx={{padding:"10px", margin:"5px"}}>
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

                        <Grid item xs={9}>
                            <Paper elevation={2}sx={{padding:"10px", margin:"5px"}}>
                                <Typography align='center' variant='h5' sx={{fontWeight:'bold'}}>
                                    ¿Como se deben preparar los materiales para ser reciclados?
                                </Typography>
                                <br/>
                                <Typography align='justify' variant='body1'>
                                    Para reciclar papeles y cartones, es fundamental que estén limpios y secos, ya que la humedad y la contaminación de alimentos pueden dificultar el proceso de reciclaje.
                                    También, es importante eliminar elementos no reciclables que tengan contacto con los papeles o cartones, como plástico y metal. Las cajas de cartón deben estar plegadas o aplastadas para ahorrar espacio en el contenedor de reciclaje y permitir el ingreso de más materiales.
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={3}>
                        </Grid>

                        <Grid item xs={3}>
                        </Grid>

                        <Grid item xs={9}>
                            <Paper elevation={2}sx={{padding:"10px", margin:"5px"}}>
                                <Typography align='center' variant='h5' sx={{fontWeight:'bold'}}>
                                    ¿Por qué es importante reciclar este tipo de materiales?
                                </Typography>
                                <br/>
                                <Typography align='justify' variant='body1'>
                                    Reciclar papeles y cartones es esencial para conservar recursos forestales al reducir la tala de árboles, ahorrar energía al disminuir las emisiones de gases de efecto invernadero en la producción de papel, prolongar la vida útil de vertederos al reducir la cantidad de desechos, y preservar el agua al minimizar el consumo en el proceso de fabricación. Además, fomenta la generación de empleos en la industria del reciclaje y promueve un ciclo cerrado de productos de papel, contribuyendo a la sostenibilidad económica y ambiental.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Separador altura="20px" />
            <Footer/>
        </div>
    )
}

export default Lata