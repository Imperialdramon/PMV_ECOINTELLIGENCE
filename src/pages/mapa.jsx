import React from 'react'
import { useEffect,useState,useRef } from 'react';
import NavBar from '../components/nav_bar'
import { Bread_crumbs } from '../components/breadcrumbs';
import { Container, Drawer, Box, Grid, Stack, Typography} from '@mui/material';
import BarChart from '../components/BarChart';
import { createRoot } from 'react-dom/client';
import Reciclaje from '../assets/reciclaje.png';
import { Wrapper } from '@googlemaps/react-wrapper';
import Footer from '../components/footer';
import '../stylesheets/page/page__container.scss';
import Separador from '../components/separator';

var head = document.getElementsByTagName('head')[0];

// Save the original method
var insertBefore = head.insertBefore;

// Replace it!
head.insertBefore = function (newElement, referenceElement) {

    if (newElement.href && newElement.href.indexOf('https://fonts.googleapis.com/css?family=Roboto') === 0) {
        return;
    }

    insertBefore.call(head, newElement, referenceElement);
};

const markersData = {
    A:{
        position:{lat:-33.49092, lng:-70.61872},
        state:"red",
        data:[100, 100, 100, 100, 100, 100]
    },
    B:{
        position:{lat:-33.49143, lng:-70.61830},
        state:"orange",
        data:[65, 59, 100, 81, 56, 55]
    },
    C:{
        position:{lat:-33.48984, lng:-70.61965},
        state:"green",
        data:[10, 20, 50, 20, 15, 40]
    }
}

const mapOptions = {
    mapId: "70ace97b3c490c53",
    center:{lat:-33.49100,lng:-70.61892},
    zoom: 19,
    disableDefaultUI: true
}

const bar = [10, 20, 50, 20, 15, 40];

export const Mapa = () => {
    return (
        <div className='page__container'>
            <NavBar />
            <Bread_crumbs />
            <Typography variant='h3' align='center' sx={{fontWeight:'bold'}}>
                Mapa Interactivo
            </Typography>
            <Separador altura="20px" />
            <Container maxWidth={false} sx={{display:'flex', width:"95%"}}>
                <Grid container sx={{height:"110%"}}>
                    <Grid item xs={7} sx={{height:"110%", border:1}}>
                        <Wrapper
                            apiKey='AIzaSyBH7WLmJP1eX-pBZBILTvwXNBYayz2vjuA'
                            version='beta'
                            libraries={["marker"]}
                            >
                            <Map/>
                        </Wrapper>
                    </Grid>
                    <Grid item xs={5} padding={5} sx={{background:'#ABEBC6'}} textAlign={'center'} justifyContent={"center"} alignContent={"center"}>
                        <Stack spacing={3}>
                            
                            <Typography variant='h4' sx={{fontWeight:'bold'}}>Colores de los marcadores</Typography>
                            <Stack direction='row' justifyContent='justify' alignItems="center" spacing={2}>
                                <div className={'marker red'}><img src={Reciclaje} alt="marker"/></div>
                                <Typography variant='subtitle1'>Indica que todos los contenedores están llenos</Typography>
                            </Stack>
                            <Stack direction='row' justifyContent='justify' alignItems="center" spacing={2}>
                                <div className={'marker orange'}><img src={Reciclaje} alt="marker"/></div>
                                <Typography variant='subtitle1'>Indica que uno o más contenedores están llenos</Typography>
                            </Stack>
                            <Stack direction='row' justifyContent='justify' alignItems="center" spacing={2}>
                                <div className={'marker green'}><img src={Reciclaje} alt="marker"/></div>
                                <Typography variant='subtitle1'>Indica que ningún contenedor está lleno</Typography>
                            </Stack>
                            <Container justifyContent='center'>
                                <Typography variant='h4' sx={{fontWeight:'bold'}}>¿Como se utiliza el Mapa Interactivo?</Typography>
                                <Typography lineHeight={1.2} align='justify' variant='subtitle1'>Se puede mover por el mapa mediante el desplazamiento, alejar o acercar</Typography>
                                
                                <Typography lineHeight={1.2} align='justify' variant='subtitle1'>Hacer click en alguno de los marcadores en el mapa para obtener la información detallada de los contenedores</Typography>
                                
                                <Typography lineHeight={1.2} align='justify' variant='subtitle1'>Pasar por encima el mouse para observar detalladamente los porcentajes de cada contenedor en la barra correspondiente</Typography>
                                
                                <Typography lineHeight={1.2} align='justify' variant='subtitle1'>Hacer click afuera para salir del desplegable de información</Typography>
                            </Container>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
            <Separador altura="20px" />
            <Footer/>
        </div>
    )
}

function Map(){
    const [map,setMap] = useState()
    const ref = useRef()
    useEffect(()=>{
        setMap(new window.google.maps.Map(ref.current,mapOptions))
    },[])
    return (
        <>
            <div ref={ref} id='map'/>
            {map && <Indicadores map={map}/>}
        </>
    )
}

function Indicadores({map}){
    const [openDrawer,setOpenDrawer] = useState(false)
    const [data,setData] = useState(markersData)
    const [databar,setDataBar] = useState(bar)
    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer)
    }
    return (
        <>
            {Object.entries(data).map(([key,marker])=>(
                <Marker
                    key={key}
                    map={map} 
                    position={marker.position}
                    onClick={() => {
                        setDataBar(marker.data)
                        toggleDrawer()
                    }}
                    >
                    <div className={`marker ${marker.state.toLowerCase()}`}>
                        <img src={Reciclaje} alt="marker"/>
                    </div>
                </Marker>
            ))}
            <Drawer
                    anchor='bottom'
                    open={openDrawer}
                    onClose={toggleDrawer}
                    PaperProps={{ square: false, sx:{borderTopLeftRadius:30,borderTopRightRadius:30}}}
                >
                    <Container maxWidth={false} sx={{display:'flex',justifyContent:'center'}}>
                        <Box
                            sx={{maxWidth:'80%',display:'flex',justifyContent:'center'}}
                        >
                            <BarChart data={databar}/>
                        </Box>
                    </Container>
            </Drawer>
        </>
    )
}

function Marker({ map, position, children, onClick}){
    const markerRef = useRef()
    const rootRef = useRef()
    useEffect(() => {
        if (!rootRef.current) {
            const container = document.createElement("div")
            rootRef.current = createRoot(container)
            
            markerRef.current = new google.maps.marker.AdvancedMarkerElement({
                position,
                content: container,
            })
        }
        return () => (markerRef.current.map = null)
    }, [])
    
    useEffect(()=>{
        rootRef.current.render(children)
        markerRef.current.position = position
        markerRef.current.map = map
        const listener = markerRef.current.addListener("click", onClick);
        return () => listener.remove()
    },[map,position,children])
}
export default Mapa