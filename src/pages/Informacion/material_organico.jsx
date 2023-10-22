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
import img_basurero from '../../assets/recycle/recycle_organic.png'
import apple from '../../assets/info/apple.png'
import banana from '../../assets/info/banana.png'

const containerStyles = {
    display: 'flex',
    justifyContent: 'center', // Centra horizontalmente
    alignItems: 'center',     // Centra verticalmente
    height: '10%',         // Establece una altura al 100% de la vista
}

const paper_color = "#EC903A"
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

const lista_1 = ['Restos de frutas y verduras', 'Cáscaras de huevo', 'Hojas secas y ramas pequeñas', 'Recortes de césped'];
const lista_2 = ['Servilletas y pañuelos de papel usados', 'Pan y productos horneados no consumidos', 'Restos de comida cocida', 'Cáscaras de nueces y/o de almendras'];
const lista_3 = ['Flores marchitas y plantas de interior', 'Bolsas de té y bolsitas de té', 'Paja y heno', 'Cáscaras de papas'];

const Material_Organico = () => {
    return (
        <div className='page__container'>
            <NavBar />
            <Bread_crumbs />
            <div className="content-wrap">
                <Typography align='center' variant='h3' sx={{fontWeight:'bold'}}>
                    Materiales Orgánicos
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
                            <Paper elevation={2} sx={{padding:"15px", margin:"5px", backgroundColor: paper_color, color:"primary.contrastText"}}>
                                <Typography align='center' variant={titles} sx={{fontWeight:'bold'}}>
                                    ¿Qué tipo de material se encuentra en esta categoría?
                                </Typography>
                                <br/>
                                <Typography align='justify' variant={bodys} style={estiloPersonalizado}>
                                    En la categoría de Materiales Orgánicos se encuentran los desechos biodegradables de origen natural, como restos de alimentos (cáscaras, sobras, etc.), recortes de césped, hojas, ramas y otros materiales que pueden descomponerse de manera natural. Estos materiales son ricos en carbono y nitrógeno, lo que los hace ideales para el compostaje, un proceso en el cual se descomponen para convertirse en abono orgánico.
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
                            <Paper elevation={2} sx={{padding:"15px", margin:"5px", backgroundColor: paper_color, color:"primary.contrastText"}}>
                                <Typography align='center' variant={titles} sx={{fontWeight:'bold'}}>
                                    ¿Como se deben preparar los materiales para ser reciclados?
                                </Typography>
                                <br/>
                                <Typography align='justify' variant={bodys} style={estiloPersonalizado}>
                                    La preparación de materiales orgánicos para su reciclaje implica recolectarlos por separado en un contenedor en este caso anaranjado. Es importante asegurarse de que estos materiales estén limpios y libres de contaminantes, como plástico o metal. Para acelerar el proceso de compostaje, se recomienda picar o triturar los desechos orgánicos y asegurarse de que haya una adecuada proporción de carbono (materiales marrones, como hojas secas) y nitrógeno (materiales verdes, como restos de alimentos) en el montón. Mantener una adecuada humedad y aireación también es esencial para un compostaje efectivo.
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={2}>
                            <div style={containerStyles}>
                                <img
                                    src={apple} // Reemplaza con la ruta de tu imagen
                                    width="100%" // Ancho deseado en píxeles
                                    height="100%" // Alto deseado en píxeles
                                />
                            </div>
                        </Grid>

                        <Grid item xs={2}>
                            <div style={containerStyles}>
                                <img
                                    src={banana} // Reemplaza con la ruta de tu imagen
                                    width="100%" // Ancho deseado en píxeles
                                    height="100%" // Alto deseado en píxeles
                                />
                            </div>
                        </Grid>

                        <Grid item xs={10}>
                            <Paper elevation={2}sx={{padding:"15px", margin:"5px", backgroundColor: paper_color, color:"primary.contrastText"}}>
                                <Typography align='center' variant={titles} sx={{fontWeight:'bold'}}>
                                    ¿Por qué es importante reciclar este tipo de materiales?
                                </Typography>
                                <br/>
                                <Typography align='justify' variant={bodys} style={estiloPersonalizado}>
                                    Reciclar materiales orgánicos a través del compostaje es esencial por varias razones. En primer lugar, reduce significativamente la cantidad de residuos que se envían a vertederos, lo que prolonga la vida útil de estos sitios y disminuye la generación de lixiviados tóxicos. Además, el compostaje produce abono orgánico de alta calidad que puede utilizarse para enriquecer el suelo de jardines, huertos y cultivos, mejorando su estructura y fertilidad. Asimismo, el proceso de compostaje evita la producción de metano, un potente gas de efecto invernadero, que se genera cuando los materiales orgánicos se descomponen en vertederos. Esto contribuye a la lucha contra el cambio climático y la conservación del medio ambiente.
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

export default Material_Organico