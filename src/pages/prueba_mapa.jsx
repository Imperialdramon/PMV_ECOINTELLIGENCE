import { Container } from '@mui/material';
import { Wrapper } from '@googlemaps/react-wrapper';
import React from 'react';
import { useEffect,useState,useRef } from 'react';
import { createRoot } from 'react-dom/client';
import Reciclaje from '../assets/reciclaje.png';


export const PMapa = () => {
    return (
        <Wrapper
            apiKey='AIzaSyBH7WLmJP1eX-pBZBILTvwXNBYayz2vjuA'
            version='beta'
            libraries={["marker"]}
        >
            <Map/>
        </Wrapper>
    )
}

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

function Map(){
    const [map,setMap] = useState();
    const ref = useRef();
    useEffect(()=>{
        setMap(new window.google.maps.Map(ref.current,mapOptions))
    },[])
    return (
        <>
            <div ref={ref} id='mapo'/>
            {map && <Indicadores map={map}/>}
        </>
    )
}

function Indicadores({map}){
    const [data,setData] = useState(markersData);
    return (
        <>
            {Object.entries(data).map(([key,marker])=>(
                <Marker
                    key={key}
                    map={map} 
                    position={marker.position}
                    >
                    <div className={`marker ${marker.state.toLowerCase()}`}>
                        <img src={Reciclaje} alt="marker"/>
                    </div>
                </Marker>
            ))};
        </>
    )
}

function Marker({ map, position, children}){
    const markerRef = useRef();
    const rootRef = useRef();
    useEffect(() => {
        if (!rootRef.current) {
            const container = document.createElement("div");
            rootRef.current = createRoot(container);
            
            markerRef.current = new google.maps.marker.AdvancedMarkerElement({
                position,
                content: container,
            });
        }
    }, []);
    
    useEffect(()=>{
        rootRef.current.render(children);
        markerRef.current.position = position;
        markerRef.current.map = map;
    },[map,position,children])
}
export default PMapa;