import React from 'react'
import NavBar from '../components/nav_bar'
import { Bread_crumbs } from '../components/breadcrumbs'
import Footer from '../components/footer'
import '../stylesheets/page/page__container.scss'
import Separador from '../components/separator'
import { Container } from '@mui/system'
import Grid from '@mui/material/Grid'

//export from cards
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

// Dialogo
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'

// photo's
import new_01 from '../assets/news_01.jpg'
import new_02 from '../assets/news_02.jpg'
import new_03 from '../assets/news_03.jpg'
import new_04 from '../assets/news_04.jpg'
import new_05 from '../assets/news_05.jpg'
import new_06 from '../assets/news_06.jpg'

function Template({image, alto, texto, texto2, titulo, noticia, enlace}) {
    const [open, setOpen] = React.useState(false);

    const handleButtonClick = () => {
        window.location.href = enlace;
    }

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return(
        <div>
            <Card sx={{ maxWidth: 600, height: '420px'}}>
                <CardActionArea onClick={handleClickOpen} sx={{height: '100%'}}>
                    <CardMedia
                        component="img"
                        height={alto}
                        image={image}
                        sx={{
                            position: 'sticky', // Hace que la imagen sea fija en la parte superior
                            top: 0, // Posición en la parte superior
                        }}
                        />
                    <CardContent sx={{flexGrow:1}}>
                        <Typography gutterBottom variant="h6" component="div" align='justify'>
                            <b>
                                {titulo}
                            </b>
                        </Typography>
                        <br />
                        <Typography variant="body2" color="text.secondary" align='justify'>
                            {texto}
                            <br />
                            {texto2}
                            <br />
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title" align='justify'>
                    {"Estás a punto de ser redirigido a otra página"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" align='justify'>
                        ¿Quieres continuar viendo la noticia en la página {noticia}?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} align='center'>
                        Cancelar
                    </Button>
                    <Button onClick={handleButtonClick} align='center'>
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export const Noticias = () => {
    return (
        <div className="page__container">
            <NavBar />
            <Bread_crumbs />
            <div className='content-wrap'>
                <h1 style={{ textAlign: 'center' }}>
                    Últimas Noticias
                </h1>
                <Separador altura="20px"/>
                <Container maxWidth= "false" sx={{display:'flex', justifyContent:'center'}}>
                    <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs ={4}>
                            <Template
                                image={new_01}
                                alto="220px"
                                titulo="Comienza retiro de residuos reciclables desde 750 mil domicilios capitalinos"
                                texto="La medida se enmarca en la Ley de Reciclaje y se traducirá, concretamente, en la circulación de camiones -parecidos a los de la basura- por la ciudad."
                                texto2="Cartón, latas y plásticos serán recolectados en 24 comunas de la Región Metropolitana."
                                enlace="https://cooperativa.cl/noticias/sociedad/medioambiente/reciclaje/comienza-retiro-de-residuos-reciclables-desde-750-mil-domicilios/2023-10-01/103123.html"
                                noticia="Coperativa"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Template
                                image={new_02}
                                alto="200px"
                                titulo="Grupo Red protagoniza campaña de reciclaje del Gobierno de Chile"
                                texto="Luego de haber recreado un clásico spot por la conducción responsable junto a Guido Vecchiola, el Gobierno de Chile escogió a otra figura popular para una campaña pública. Esta vez fue el Grupo Red, un conjunto argentino de cumbia y sound que vivió su fama a fines de los 90 y que ahora protaniza la campaña comunicacional de la Ley de Responsabilidad Extendida del Productor (REP) o Ley del Reciclaje."
                                enlace="https://cooperativa.cl/noticias/entretencion/musica/grupo-red-protagoniza-campana-de-reciclaje-del-gobierno-de-chile/2023-09-14/085625.html"
                                noticia="Coperativa"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Template
                                image={new_03}
                                alto="240px"
                                titulo="Proyectos de sustentabilidad recibieron premio para su ejecución"
                                texto="Innovaciones de Santiago, Antofagasta, Punta Arenas y Temuco tendrán aporte financiero."
                                enlace="https://cooperativa.cl/noticias/sociedad/medioambiente/reciclaje/proyectos-de-sustentabilidad-recibieron-premio-para-su-ejecucion/2021-11-30/175134.html"
                                noticia="Coperativa"
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <Template
                                image={new_04}
                                alto="230px"
                                titulo="Universidad de Concepción reciclará las mascarillas"
                                texto="
                                A fines del año pasado, Softys, empresa de productos de higiene y cuidado personal, puso en marcha en conjunto con la Unidad de Desarrollo Tecnológico (UDT) de la Universidad de Concepción, un programa piloto para reciclaje de mascarillas en Concepción.
                                "
                                enlace="https://www.udt.cl/universidad-de-concepcion-y-empresas-buscaran-reciclar-cuatro-toneladas-de-mascarillas/"
                                noticia="Universidad de Concepción"
                            />      
                        </Grid>

                        <Grid item xs={4}>
                            <Template
                                image={new_05}
                                alto="170px"
                                titulo="Premios Cero Basura reconoció proyectos de sustentabilidad"
                                texto="La función de copiar y pegar nuestros contenidos, es actualmente exclusiva de los suscriptores a DF Digital Premium, si estás suscrito, inicia sesión con tu mail y clave. Además, el suscriptor sólo puede hacer uso personal del contenido de DF y queda expresamente prohibido modificar, publicar, transmitir, distribuir, exhibir, comunicar al público o reproducir el contenido en todo o en parte, ni participar en su transmisión, representación o venta, o explotarlos en forma alguna que no esté expresamente exceptuado por la ley aplicable y convenios internacionales vigentes sobre propiedad intelectual."
                                enlace="https://www.df.cl/df-lab/sostenibilidad/premios-cero-basura-destaca-iniciativas-de-empresas-en-gestion-de-residuos"
                                noticia="Diario Financiero"
                            />  
                        </Grid>

                        <Grid item xs={4}>
                            <Template
                                image={new_06}
                                alto="200px"
                                titulo="Gobierno anuncia proyecto para evitar que residuos orgánicos terminen en los rellenos"
                                texto="El proyecto busca instaurar obligaciones en la gestión de reciclaje para Gobiernos regionales y municipios, e impulsar la separación de desechos orgánicos en viviendas.\n Su implementación será de forma gradual, partiendo con restos de poda y residuos de ferias libres."
                                enlace="https://cooperativa.cl/noticias/pais/medioambiente/gobierno-anuncia-proyecto-para-evitar-que-residuos-organicos-terminen-en/2023-06-05/141838.html"
                                noticia="Coperativa"
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
export default Noticias