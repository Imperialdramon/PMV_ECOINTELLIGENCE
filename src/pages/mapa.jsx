import React from 'react'
import { useEffect,useState,useRef } from 'react';
import NavBar from '../components/nav_bar'
import { Bread_crumbs } from '../components/breadcrumbs';
import { Container, Drawer, Button, Box} from '@mui/material';
import BarChart from '../components/BarChart';
import { createRoot } from 'react-dom/client';
import Reciclaje from '../assets/reciclaje.png';
import { Wrapper } from '@googlemaps/react-wrapper';
import Footer from '../components/footer';
import '../stylesheets/page/page__container.scss';
import Separador from '../components/separator';

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
            <div className="content-wrap">
                <Box sx={{ width: 0.6, m: 1, margin: '0 auto',}}>
                    <Wrapper
                        apiKey='AIzaSyBH7WLmJP1eX-pBZBILTvwXNBYayz2vjuA'
                        version='beta'
                        libraries={["marker"]}
                        >
                        <Map/>
                    </Wrapper>
                </Box>

            </div>
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
                >
                    <Container maxWidth={false} sx={{display:'flex',justifyContent:'center'}}>
                        <Box
                            sx={{width:600,display:'flex',justifyContent:'center'}}
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