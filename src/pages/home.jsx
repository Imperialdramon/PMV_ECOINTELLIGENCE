import React from 'react'
import NavBar from '../components/nav_bar'
import { Bread_crumbs } from '../components/breadcrumbs'
import Footer from '../components/footer'
import '../stylesheets/page/page__container.scss'
import Separador from '../components/separator'
import { Container, Paper, Grid, Typography } from '@mui/material'
import man from '../assets/bald_reciclyng.png'
import map from '../assets/mapa_i.png'
import inf from '../assets/informa.png'

const containerStyles = {
  display: 'flex',
  justifyContent: 'center', // Centra horizontalmente
  alignItems: 'center',     // Centra verticalmente
}

export const HomePage = () => {
  return (
    <div className='page__container'>
      <NavBar />
      <Bread_crumbs />
      <div className="content-wrap">

        <Separador altura="20px"/>
        <Container maxWidth={false} sx={{display:'flex', justifyContent:'center', width:"90%"}} >
          <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs ={8}>
              <Typography variant='h3' align='center' sx={{fontWeight:'bold'}}>
                ¿Qué es EcoItelligence?
              </Typography>
              <Paper 
                elevation={1}
                sx={{
                  padding:"15px",
                  margin:"5px",
                  backgroundColor:"preguntas.main",
                  color:"preguntas.contrastText",
                  borderRadius:5
                }}
              >
                <Typography variant="h6" align='justify' sx={{fontWeight:'bold'}} padding="1%">
                  EcoIntelligence es una plataforma en línea dedicada a fomentar la conciencia ambiental y la sostenibilidad a través de la educación, la información y la facilitación del reciclaje. Nuestra misión es proporcionar a las personas las herramientas y recursos necesarios para tomar decisiones más eco-amigables en su vida cotidiana. Ofrecemos un mapa interactivo para localizar contenedores de reciclaje, información sobre qué materiales son reciclables y en qué tipo de contenedor deben ser depositados, además de una variedad de recursos educativos sobre el reciclaje y la sostenibilidad. EcoIntelligence es un punto de partida para aquellos que desean contribuir al cuidado del medio ambiente y unirse a una comunidad comprometida con un mundo más sostenible.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs ={4}>
              <div style={containerStyles}>
                <img
                  src={man} // Reemplaza con la ruta de tu imagen
                  width={"70%"} // Alto deseado en píxeles
                />
              </div>
            </Grid>
            <Grid xs={12}>
              <Separador altura="20px"/>
            </Grid>
            <Grid item xs ={4}>
              <div style={containerStyles}>
                <img
                  src={map} // Reemplaza con la ruta de tu imagen
                  width={"90%"} // Alto deseado en píxeles
                />
              </div>
            </Grid>
            <Grid item xs ={8}>
              <Typography variant='h5' align='center' sx={{fontWeight:'bold'}}>
                ¿Quieres encontrar contenedores cerca de tu área?
              </Typography>
              <Paper 
                    elevation={1}
                    sx={{
                      padding:"15px",
                      margin:"5px",
                      backgroundColor:"preguntas.main",
                      color:"preguntas.contrastText",
                      borderRadius:5
                    }}
                >
                <Typography variant="h6" align='justify' sx={{fontWeight:'bold'}} padding="1%">
                  Nuestro mapa interactivo te permite localizar fácilmente los puntos de reciclaje respecto a distintas ubicaciones. Solo debes entrar a la sección y buscar los contenedores de reciclaje en tu área. ¡Contribuye al cuidado del medio ambiente sin mayor esfuerzo!
                </Typography>
              </Paper>
            </Grid>
            <Grid xs={12}>
              <Separador altura="20px"/>
            </Grid>
            <Grid item xs ={8}>
              <Typography variant='h5' align='justify' sx={{fontWeight:'bold'}}>
                ¿Te preguntas qué materiales son reciclables y en qué tipo de contenedor debes depositarlos?
              </Typography>
              <Paper 
                elevation={1}
                sx={{
                  padding:"15px",
                  margin:"5px",
                  backgroundColor:"preguntas.main",
                  color:"preguntas.contrastText",
                  borderRadius:5
                }}
              >
                <Typography variant="h6" align='justify' sx={{fontWeight:'bold'}} padding="1%">
                  EcoIntelligence tiene las respuestas. Navegando por nuestra sección informativa para aprender sobre los diferentes tipos de contenedores y qué materiales son aptos para el reciclaje. Estamos aquí para ayudar a simplificar el proceso de reciclaje.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs ={4}>
              <div style={containerStyles}>
                <img
                  src={inf} // Reemplaza con la ruta de tu imagen
                  width={"50%"} // Alto deseado en píxeles
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

export default HomePage
