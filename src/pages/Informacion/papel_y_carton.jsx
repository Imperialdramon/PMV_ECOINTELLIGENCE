import React from 'react'
import NavBar from '../../components/nav_bar'
import { Bread_crumbs } from '../../components/breadcrumbs'
import Footer from '../../components/footer'
import '../../stylesheets/page/page__container.scss'
import Separador from '../../components/separator'
import { Container } from '@mui/system'
import { Stack, Typography} from "@mui/material"
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import img_basurero from '../../assets/recycle/recycle_paper.png'
import news from '../../assets/info/newspaper.png'
import box from '../../assets/info/box.png'


const containerStyles = {
    display: 'flex',
    justifyContent: 'center', // Centra horizontalmente
    alignItems: 'center',     // Centra verticalmente
    height: '10%',         // Establece una altura al 100% de la vista
}

const paper_color = "#5ba3e580"
const titles = "h4"
const bodys = "body1"

const estiloPersonalizado = {
    fontSize: '20px',
    lineHeight: '1.2', // Ajusta el valor según el espacio deseado entre líneas
}

const estiloPersonalizadoListas = {
    fontSize: '17px',
    lineHeight: '1.5', // Ajusta el valor según el espacio deseado entre líneas
}

function ListaDePalabras({ palabras }) {
    return (
        <Stack>
            {palabras.map((palabra, index) => (
                <Typography key={index} variant={bodys} style={estiloPersonalizadoListas} align="justify" color="primary.contrastText" marginTop={1}>
                    <FiberManualRecordIcon fontSize="body2" color="#5ba3e5" />
                    {palabra}
                </Typography>
            ))}
        </Stack>
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
                <Typography align='center' variant='h3' sx={{fontWeight:'bold'}}>
                    Papel y Cartón
                </Typography>
                <Separador altura="20px" />
                <Container maxWidth="false" sx={{display:'flex', justifycontent:'center', width: "95%"}}>
                    <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={2}>
                            <div style={containerStyles}>
                                <img
                                    src={img_basurero} // Reemplaza con la ruta de tu imagen
                                    width="150%" // Ancho deseado en píxeles
                                    height="150%" // Alto deseado en píxeles
                                />
                            </div>
                        
                        </Grid>
                        
                        <Grid item xs={10}>
                            <Paper elevation={2} sx={{padding:"10px", margin:"5px", backgroundColor: paper_color, color:"primary.contrastText"}}>
                                <Typography align='center' variant={titles} sx={{fontWeight:'bold'}}>
                                    ¿Qué tipo de material se encuentra en esta categoría?
                                </Typography>
                                <br/>
                                <Typography align='justify' variant={bodys} style={estiloPersonalizado}>
                                    En esta categoría están clasificados materiales principalmente de fibra de celulosa y utilizados debido a su versatilidad en una amplia gama de aplicaciones.
                                    Estas aplicaciones incluyen materiales de uso doméstico, como materiales para envío de productos, donde algunos de estos se encuentran listados en la siguiente lista:
                                </Typography>
                                <Grid container alignItems="center" rowSpacing={0.5} columnSpacing={{ xs: 0.5, sm: 1, md: 1 }}>
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

                        <Grid item xs={10}>
                            <Paper elevation={2} sx={{padding:"10px", margin:"5px", backgroundColor: paper_color, color:"primary.contrastText"}}>
                                <Typography align='center' variant={titles} sx={{fontWeight:'bold'}}>
                                    ¿Como se deben preparar los materiales para ser reciclados?
                                </Typography>
                                <br/>
                                <Typography align='justify' variant={bodys} style={estiloPersonalizado}>
                                    Para reciclar papeles y cartones, es fundamental que estén limpios y secos, ya que la humedad y la contaminación de alimentos pueden dificultar el proceso de reciclaje.
                                    También, es importante eliminar elementos no reciclables que tengan contacto con los papeles o cartones, como plástico y metal. Las cajas de cartón deben estar plegadas o aplastadas para ahorrar espacio en el contenedor de reciclaje y permitir el ingreso de más materiales.
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={2}>
                            <div style={containerStyles}>
                                <img
                                    src={box} // Reemplaza con la ruta de tu imagen
                                    width="100%" // Ancho deseado en píxeles
                                    height="100%" // Alto deseado en píxeles
                                />
                            </div>
                        </Grid>

                        <Grid item xs={2}>
                            <div style={containerStyles}>
                                <img
                                    src={news} // Reemplaza con la ruta de tu imagen
                                    width="100%" // Ancho deseado en píxeles
                                    height="100%" // Alto deseado en píxeles
                                />
                            </div>
                        </Grid>

                        <Grid item xs={10}>
                            <Paper elevation={2}sx={{padding:"10px", margin:"5px", backgroundColor: paper_color, color:"primary.contrastText"}}>
                                <Typography align='center' variant={titles} sx={{fontWeight:'bold'}}>
                                    ¿Por qué es importante reciclar este tipo de materiales?
                                </Typography>
                                <br/>
                                <Typography align='justify' variant={bodys} style={estiloPersonalizado}>
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

export default Papel_Carton