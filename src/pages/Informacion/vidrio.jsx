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
import img_basurero from '../../assets/recycle/recycle_glass.png'
import window from '../../assets/info/window.png'
import bottle from '../../assets/info/glass_bottle.png'
import broken from '../../assets/info/broken_glass.png'

const containerStyles = {
    display: 'flex',
    justifyContent: 'center', // Centra horizontalmente
    alignItems: 'center',     // Centra verticalmente
    height: '10%',         // Establece una altura al 100% de la vista
}

const paper_color = "preguntas.main"
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
                <Typography key={index} variant={bodys} style={estiloPersonalizadoListas} align="justify" color="preguntas.contrastText" marginTop={1}>
                    <FiberManualRecordIcon fontSize="body2"/>
                    {palabra}
                </Typography>
            ))}
        </Stack>
    )
}

const lista_1 = ['Botellas de Vidrio', 'Frascos de Vidrio', 'Vasos y Copas de Vidrio']
const lista_2 = ['Envases de Vidrio para Cosméticos', 'Ventanas y Espejos', 'Bombillas y Tubos de Luz']
const lista_3 = ['Vidrio de Laboratorio', 'Fibras de Vidrio', 'Objetos de Vidrio Antiguo o de Colección']


const Vidrio = () => {
    return (
        <div className='page__container'>
            <NavBar />
            <Bread_crumbs />
            <div className="content-wrap">
                <Typography align='center' variant='h3' sx={{fontWeight:'bold'}}>
                    Vidrios
                </Typography>
                <Separador altura="20px" />
                <Container maxWidth="false" sx={{display:'flex', justifycontent:'center', width: "95%"}}>
                    <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={3}>
                            <div style={containerStyles}>
                                <img
                                    src={img_basurero} // Reemplaza con la ruta de tu imagen
                                    width="100%" // Ancho deseado en píxeles
                                    height="100%" // Alto deseado en píxeles
                                />
                            </div>
                        
                        </Grid>
                        
                        <Grid item xs={9}>
                            <Paper elevation={2} sx={{padding:"20px", margin:"5px", backgroundColor: paper_color, color:"preguntas.contrastText"}}>
                                <Typography align='center' variant={titles} sx={{fontWeight:'bold'}}>
                                    ¿Qué tipo de material se encuentra en esta categoría?
                                </Typography>
                                <br/>
                                <Typography align='justify' variant={bodys} style={estiloPersonalizado}>
                                    En esta categoría están clasificados materiales principalmente compuestos completamente de vidrio, como botellas, envases u otros productos. Algunos otros ejemplos de este material se muestran en el siguiente listado:
                                </Typography>
                                <Grid container alignItems="center" rowSpacing={0.5} columnSpacing={{ xs: 0.5, sm: 1, md: 1 }}>
                                    <Grid item xs={1}/>
                                    <Grid item xs={3}>
                                        <ListaDePalabras palabras={lista_1}/>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <ListaDePalabras palabras={lista_2}/>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <ListaDePalabras palabras={lista_3}/>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={10}>
                            <Paper elevation={2} sx={{padding:"20px", margin:"5px", backgroundColor: paper_color, color:"preguntas.contrastText"}}>
                                <Typography align='center' variant={titles} sx={{fontWeight:'bold'}}>
                                    ¿Como se deben preparar los materiales para ser reciclados?
                                </Typography>
                                <br/>
                                <Typography align='justify' variant={bodys} style={estiloPersonalizado}>
                                    Para reciclar vidrio es importante que los envases estén limpios y secos, por lo que debes enjuagarlos para eliminar cualquier residuo de comida o bebida.
                                    Además, se deben retirar las tapas metálicas o plásticas de los envases de vidrio, ya que estas se reciclan por separado. No es necesario quitar las etiquetas, ya que se eliminan durante el proceso de reciclaje.
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={2}>
                            <div style={containerStyles}>
                                <img
                                    src={window} // Reemplaza con la ruta de tu imagen
                                    width="100%" // Ancho deseado en píxeles
                                    height="100%" // Alto deseado en píxeles
                                />
                            </div>
                        </Grid>

                        <Grid item xs={2}>
                            <div style={containerStyles}>
                                <img
                                    src={broken} // Reemplaza con la ruta de tu imagen
                                    width="100%" // Ancho deseado en píxeles
                                    height="100%" // Alto deseado en píxeles
                                />
                            </div>
                        </Grid>

                        <Grid item xs={10}>
                            <Paper elevation={2}sx={{padding:"20px", margin:"5px", backgroundColor: paper_color, color:"preguntas.contrastText"}}>
                                <Typography align='center' variant={titles} sx={{fontWeight:'bold'}}>
                                    ¿Por qué no se deben depositar vidrios rotos en los contenedores de vidrios?
                                </Typography>
                                <br/>
                                <Typography align='justify' variant={bodys} style={estiloPersonalizado}>
                                Porque pueden causar lesiones a quienes manipulan los residuos y aumentan el riesgo de contaminación. Además, el vidrio roto puede dificultar el proceso de reciclaje al contaminar otros materiales y afectar la calidad del vidrio reciclado.
                                </Typography>
                            </Paper>
                        </Grid>


                        <Grid item xs={10}>
                            <Paper elevation={2}sx={{padding:"20px", margin:"5px", backgroundColor: paper_color, color:"preguntas.contrastText"}}>
                                <Typography align='center' variant={titles} sx={{fontWeight:'bold'}}>
                                    ¿Por qué es importante reciclar este tipo de materiales?
                                </Typography>
                                <br/>
                                <Typography align='justify' variant={bodys} style={estiloPersonalizado}>
                                    El reciclaje de vidrio es de suma importancia debido a sus beneficios ambientales y económicos, ya que permite la conservación de recursos naturales al reducir la extracción de materias primas y ahorrar energía en comparación a la producción de vidrio, lo que a su vez disminuye la huella de carbono y contribuye a la reducción de residuos sólidos en vertederos.
                                    En definitiva, reciclar vidrio permite minimizar la contaminación del aire y el agua, lo que apoya la sostenibilidad ambiental y promueve prácticas responsables de gestión de residuos.
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={2}>
                            <div style={containerStyles}>
                                <img
                                    src={bottle} // Reemplaza con la ruta de tu imagen
                                    width="100%" // Ancho deseado en píxeles
                                    height="100%" // Alto deseado en píxeles
                                />
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Separador altura="20px" />
            <Footer/>
        </div>
    )
}

export default Vidrio