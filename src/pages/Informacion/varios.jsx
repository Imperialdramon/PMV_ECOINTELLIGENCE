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
import img_basurero from '../../assets/recycle/recycle_others.png'
import cigars from '../../assets/info/cigars.png'
import diaper from '../../assets/info/diaper.png'

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

const lista_1 = ['Envases de Comida Rápida', 'Utensilios de Plástico Desechables', 'Pañales Desechables', 'Productos de Higiene Femenina'];
const lista_2 = ['Chicles', 'Cigarrillos', 'Película de Plástico para Alimentos', 'Artículos de Papel de Aluminio Contaminados'];


const Varios = () => {
    return (
        <div className='page__container'>
            <NavBar />
            <Bread_crumbs />
            <div className="content-wrap">
                <Typography align='center' variant='h3' sx={{fontWeight:'bold'}}>
                    Varios
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
                            <Paper elevation={2} sx={{padding:"15px", margin:"5px", backgroundColor: paper_color, color:"preguntas.contrastText"}}>
                                <Typography align='center' variant={titles} sx={{fontWeight:'bold'}}>
                                    ¿Qué tipo de material se encuentra en esta categoría?
                                </Typography>
                                <br/>
                                <Typography align='justify' variant={bodys} style={estiloPersonalizado}>
                                Esta categoría incluye productos desechables que no son reciclables, como ciertos envases de comida rápida, productos de un solo uso (como utensilios de plásticos) y materiales con múltiples componentes que son difíciles de separar.
                                Por esto se busca utilizar el contenedor gris para permitir diferenciar los contenidos. Algunos otros ejemplos de este material se muestran en el siguiente listado:
                                </Typography>
                                <Grid container alignItems="center" rowSpacing={0.5} columnSpacing={{ xs: 0.5, sm: 1, md: 1 }}>
                                    <Grid item xs={6}>
                                        <ListaDePalabras palabras={lista_1}/>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <ListaDePalabras palabras={lista_2}/>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={10}>
                            <Paper elevation={2} sx={{padding:"15px", margin:"5px", backgroundColor: paper_color, color:"preguntas.contrastText"}}>
                                <Typography align='center' variant={titles} sx={{fontWeight:'bold'}}>
                                    ¿Cómo se deben desechar adecuadamente los materiales?
                                </Typography>
                                <br/>
                                <Typography align='justify' variant={bodys} style={estiloPersonalizado}>
                                Los materiales en esta categoría deben ser desechados adecuadamente en los contenedores de color gris, debido a que es importante asegurarse de que estos materiales no se arrojen en la naturaleza ni en otros contenedores de reciclaje, ya que generalmente no son reciclables. Además la disposición adecuada ayuda a prevenir la contaminación ambiental y a mantener la limpieza de las comunidades.
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={2}>
                            <div style={containerStyles}>
                                <img
                                    src={cigars} // Reemplaza con la ruta de tu imagen
                                    width="100%" // Ancho deseado en píxeles
                                    height="100%" // Alto deseado en píxeles
                                />
                            </div>
                        </Grid>

                        <Grid item xs={2}>
                            <div style={containerStyles}>
                                <img
                                    src={diaper} // Reemplaza con la ruta de tu imagen
                                    width="100%" // Ancho deseado en píxeles
                                    height="100%" // Alto deseado en píxeles
                                />
                            </div>
                        </Grid>

                        <Grid item xs={10}>
                            <Paper elevation={2}sx={{padding:"15px", margin:"5px", backgroundColor: paper_color, color:"preguntas.contrastText"}}>
                                <Typography align='center' variant={titles} sx={{fontWeight:'bold'}}>
                                    ¿Por qué es importante gestionar adecuadamente los materiales en la categoría?
                                </Typography>
                                <br/>
                                <Typography align='justify' variant={bodys} style={estiloPersonalizado}>
                                Gestionar adecuadamente los materiales en esta categoría es esencial debido a su impacto ambiental negativo. Estos materiales, en su mayoría, no son reciclables y a menudo están hechos de una combinación de materiales difíciles de separar. Si no se gestionan correctamente, pueden contaminar el medio ambiente y contribuir a la acumulación de residuos en vertederos. Desecharlos en contenedores de basura designados es crucial para prevenir la contaminación y promover prácticas de gestión de residuos más sostenibles, como la reducción del uso de productos desechables y la promoción de alternativas más amigables con el medio ambiente.
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

export default Varios