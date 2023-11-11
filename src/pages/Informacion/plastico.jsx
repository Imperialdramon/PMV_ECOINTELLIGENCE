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
import img_basurero from '../../assets/recycle/recycle_plastic.png'
import duck from '../../assets/info/duck.png'
import bottle from '../../assets/info/soap-bottles.png'
import car from '../../assets/info/car.png'

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

const lista_1 = ['Botellas de agua', 'Envases de leche', 'Envases de detergentes', 'Botellas de refrescos'];
const lista_2 = ['Botellas de jugo', 'Envases de yogur', 'Envases de margarina', 'Envases de mantequilla'];
const lista_3 = ['Envases de champú', 'Envases de acondicionador', 'Envases de productos de limpieza', 'Envases de aceite de cocina'];


const Plastico = () => {
    return (
        <div className='page__container'>
            <NavBar />
            <Bread_crumbs />
            <div className="content-wrap">
                <Typography align='center' variant='h3' sx={{fontWeight:'bold'}}>
                    Plásticos
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
                            <Paper elevation={2} sx={{padding:"20px", margin:"5px", backgroundColor: paper_color, color:"preguntas.contrastText"}}>
                                <Typography align='center' variant={titles} sx={{fontWeight:'bold'}}>
                                    ¿Qué tipo de material se encuentra en esta categoría?
                                </Typography>
                                <br/>
                                <Typography align='justify' variant={bodys} style={estiloPersonalizado}>
                                    En esta categoría se encuentran una amplia variedad de productos fabricados con plástico, que pueden incluir botellas de agua y refrescos (generalmente marcadas con el código de reciclaje #1 PET), envases de leche y detergentes (código #2 HDPE), envases de yogur y margarina (código #5 PP), así como envases de productos de limpieza y productos de consumo diario hechos de plástico. Estos productos pueden ser de un solo uso o reutilizables y a menudo están marcados con un número de identificación para facilitar su clasificación y reciclaje.
                                    Algunos otros ejemplos de este material se muestran en el siguiente listado:
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
                            <Paper elevation={2} sx={{padding:"20px", margin:"5px", backgroundColor: paper_color, color:"preguntas.contrastText"}}>
                                <Typography align='center' variant={titles} sx={{fontWeight:'bold'}}>
                                    ¿Como se deben preparar los materiales para ser reciclados?
                                </Typography>
                                <br/>
                                <Typography align='justify' variant={bodys} style={estiloPersonalizado}>
                                    Para reciclar este tipo de material de manera efectiva, es importante enjuagar y secar los envases de plástico para eliminar cualquier residuo. Los envases deben estar vacíos y limpios, sin restos de alimentos o líquidos. Además, es esencial verificar los códigos de reciclaje en la parte inferior de los envases para determinar su reciclabilidad en tu área, ya que no todos los plásticos se reciclan de la misma manera y esto es útil para la correcta recolección.
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={2}>
                            <div style={containerStyles}>
                                <img
                                    src={duck} // Reemplaza con la ruta de tu imagen
                                    width="100%" // Ancho deseado en píxeles
                                    height="100%" // Alto deseado en píxeles
                                />
                            </div>
                        </Grid>

                        <Grid item xs={2}>
                            <div style={containerStyles}>
                                <img
                                    src={car} // Reemplaza con la ruta de tu imagen
                                    width="100%" // Ancho deseado en píxeles
                                    height="100%" // Alto deseado en píxeles
                                />
                            </div>
                        </Grid>

                        <Grid item xs={10}>
                            <Paper elevation={2}sx={{padding:"20px", margin:"5px", backgroundColor: paper_color, color:"preguntas.contrastText"}}>
                                <Typography align='center' variant={titles} sx={{fontWeight:'bold'}}>
                                    ¿Por qué todos los plásticos no pueden ser reciclados?
                                </Typography>
                                <br/>
                                <Typography align='justify' variant={bodys} style={estiloPersonalizado}>
                                    No todos los plásticos pueden ser reciclados debido a las diferencias en composición química y propiedades físicas entre los distintos tipos de plásticos. La falta de uniformidad dificulta el proceso de reciclaje, ya que cada tipo de plástico requiere condiciones específicas para su tratamiento. Algunos plásticos son más difíciles de reciclar económicamente o generan subproductos no deseados durante el proceso.
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
                                    El reciclaje de plásticos es crucial debido a varios motivos. En primer lugar, reduce la demanda de petróleo crudo, que es una materia prima fundamental en la fabricación de plástico, lo que disminuye la explotación de recursos naturales no renovables. Además, el reciclaje de plásticos contribuye a la reducción de la contaminación ambiental, ya que evita que los plásticos terminen en vertederos o en el medio ambiente, donde pueden causar daños a la vida silvestre y degradarse lentamente. Además, la reutilización de plásticos reciclados ahorra energía en comparación con la producción de plástico virgen, lo que reduce las emisiones de gases de efecto invernadero. 
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

export default Plastico