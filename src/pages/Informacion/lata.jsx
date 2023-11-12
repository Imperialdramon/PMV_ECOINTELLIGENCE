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
import img_basurero from '../../assets/recycle/recycle_lata.png'
import can1 from '../../assets/info/can1.png'
import can2 from '../../assets/info/can2.png'

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

const lista_1 = ['Latas de Bebidas', 'Latas de Conservas']
const lista_2 = ['Latas de Atún y/o Pescado', 'Latas de Alimentos para Mascotas']
const lista_3 = ['Latas de Energizantes', 'Latas de Aceite y Aerosoles']


export const Lata = () => {
    return (
        <div className='page__container'>
            <NavBar />
            <Bread_crumbs />
            <div className="content-wrap">
                <Typography align='center' variant='h3' sx={{fontWeight:'bold'}}>
                    Latas
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
                                    En esta categoría están clasificados materiales principalmente de envases de aluminio o acero utilizados comúnmente en la industria alimentaria y de bebidas. Estos materiales son altamente reciclables debido a su durabilidad y capacidad para conservar los productos durante mucho tiempo. Las latas de aluminio son ligeras y resistentes a la corrosión, lo que las hace ideales para envasar bebidas, como refrescos y cerveza. Por otro lado, las latas de acero se utilizan para productos enlatados, como sopas, frutas y vegetales. Ambos tipos de latas son valiosos en el proceso de reciclaje debido a su capacidad de ser fundidos y reutilizados en la fabricación de nuevas latas y otros productos.
                                    Algunos ejemplos de estos son:
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
                                    Para reciclar latas de aluminio o acero de manera efectiva, es importante enjuagar las latas para eliminar cualquier residuo o residuo pegajoso, como restos de bebida o alimentos, ya que el proceso de reciclaje es más eficiente cuando las latas están limpias y secas. Además, es mejor aplanar las latas si es posible, ya que esto reduce el volumen y facilita el transporte y la gestión de los materiales reciclables. No es necesario quitar las etiquetas de papel, ya que se eliminan durante el proceso de reciclaje.
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={2}>
                            <div style={containerStyles}>
                                <img
                                    src={can1} // Reemplaza con la ruta de tu imagen
                                    width="100%" // Ancho deseado en píxeles
                                    height="100%" // Alto deseado en píxeles
                                />
                            </div>
                        </Grid>

                        <Grid item xs={2}>
                            <div style={containerStyles}>
                                <img
                                    src={can2} // Reemplaza con la ruta de tu imagen
                                    width="100%" // Ancho deseado en píxeles
                                    height="100%" // Alto deseado en píxeles
                                />
                            </div>
                        </Grid>

                        <Grid item xs={10}>
                            <Paper elevation={2}sx={{padding:"20px", margin:"5px", backgroundColor: paper_color, color:"preguntas.contrastText"}}>
                                <Typography align='center' variant={titles} sx={{fontWeight:'bold'}}>
                                    ¿Por qué es importante reciclar este tipo de materiales?
                                </Typography>
                                <br/>
                                <Typography align='justify' variant={bodys} style={estiloPersonalizado}>
                                    El reciclaje de latas, ya sean de aluminio o acero, desempeña un papel significativo en la sostenibilidad ambiental y la conservación de recursos, ya que reduce la necesidad de extraer nuevos recursos naturales, como bauxita para el aluminio o mineral de hierro para el acero. Esto ayuda a preservar estos recursos limitados y disminuye la degradación ambiental asociada con la minería, como también reduce el uso de energía en la producción de aluminio, reduciendo la huella de carbono. Además, ayuda a reducir la emisión de otros contaminantes en el aire y/o agua relacionados al tratamiento de metales.
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