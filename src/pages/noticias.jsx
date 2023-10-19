import React from 'react';
import NavBar from '../components/nav_bar'
import { Bread_crumbs } from '../components/breadcrumbs';
import Footer from '../components/footer';
import '../stylesheets/page/page__container.scss';
import Separador from '../components/separator';
import { Container } from '@mui/system'
import Grid from '@mui/material/Grid'

//export from cards
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


// photo's
import new_01 from '../assets/news_01.jpg';
import new_02 from '../assets/news_02.jpg';
import new_03 from '../assets/news_03.jpg';
import new_04 from '../assets/news_04.jpg';
import new_05 from '../assets/news_05.jpg';
import new_06 from '../assets/news_06.jpg';


// Exporta ImgMediaCard como un componente independiente
export function Template({image, texto, titulo, enlace}) {
    const handleButtonClick = () => {
        window.location.href = enlace 
    }
    return (
    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleButtonClick}>

        <CardMedia
            component="img"
            alt="200"
            height="140"
            image={image} 
            />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            <b>{titulo}</b>
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {texto}
            </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
  );
}

export const Noticias = () => {
  return (
    <div className="page__container">
      <NavBar />
      <Bread_crumbs />
      <div className='content-wrap'>
        <h1 style={{ textAlign: 'center' }}> Últimas Noticias </h1>
        <Separador altura="20px"/>
        <Container maxWidth= "false" sx={{display:'flex', justifyContent:'center'}}>
            <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>            
                <Grid item xs ={4}>
                    <Template
                        image={new_01}
                        texto="La medida se enmarca en la Ley de Reciclaje y se traducirá, concretamente, en la circulación de camiones -parecidos a los de la basura- por la ciudad"
                        titulo="Comienza retiro de residuos reciclables desde 750 mil domicilios capitalinos"
                        enlace="/noticias/new_01"
                    />
                </Grid>
                <Grid item xs={4}>
                    <Template
                        image={new_02}
                        texto="La campaña celebra el inicio de una nueva etapa de la Ley REP."
                        titulo="Grupo Red protagoniza campaña de reciclaje del Gobierno de Chile"
                        enlace="/noticias/new_02"
                    />
                </Grid>
                <Grid item xs={4}>
                    <Template
                            image={new_03}
                            texto="Innovaciones de Santiago, Antofagasta, Punta Arenas y Temuco tendrán aporte financiero."
                            titulo="Proyectos de sustentabilidad recibieron premio para su ejecución"
                            enlace="/noticias/new_03"
                    />
                </Grid>

                <Grid item xs={4}>
                    <Template
                        image={new_04}
                        texto="El proyecto busca recolectar una tonelada mensual de estos desechos durante los próximos seis meses."
                        titulo="Universidad de Concepción reciclará las mascarillas"
                        enlace="/noticias/new_04"
                    />      
                </Grid>

                <Grid item xs={4}>
                    <Template
                        image={new_05}
                        texto="Más de 70 postulaciones recibió la convocatoria que busca exponer nuevas soluciones para el problema de la basura."
                        titulo="Premios Cero Basura reconoció proyectos de sustentabilidad"
                        enlace="/noticias/new_05"
                    />  
                </Grid>

                <Grid item xs={4}>
                    <Template
                        image={new_06}
                        texto="El proyecto busca instaurar obligaciones en la gestión de reciclaje para Gobiernos regionales y municipios, e impulsar la separación de desechos orgánicos en viviendas."
                        titulo="Gobierno anuncia proyecto para evitar que residuos orgánicos terminen en los rellenos"
                        enlace="/noticias/new_06"
                    />    
                </Grid>
            </Grid>



        </Container>



      </div>
    </div>
  );
};
export default Noticias