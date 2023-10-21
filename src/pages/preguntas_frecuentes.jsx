import * as React from 'react'
import Desplegable from "../components/desplegable"
import Typography from '@mui/material/Typography'
import NavBar from '../components/nav_bar'
import { Bread_crumbs } from '../components/breadcrumbs'
import Footer from '../components/footer'
import '../stylesheets/page/page__container.scss'
import Separador from '../components/separator'



export default function Preguntas_Frecuentes() {
    const [expanded, setExpanded] = React.useState('panel1')
    const handleChange = (panel) => (_, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    }
    return (
        <div className='page__container'>
            <NavBar />
            <Bread_crumbs />
            <div className="content-wrap">
                <Typography align='center' variant='h3'>
                    Preguntas frecuentes
                </Typography>
                <Separador altura="20px" />
                <Desplegable
                    nombre="Desp_1"
                    titulo="¿Qué es el reciclaje?"
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                
                />
                <Desplegable
                    nombre="Desp_2"
                    titulo="¿Por qué es recomendable reciclar los desperdicios?"
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                
                />
                <Desplegable
                    nombre="Desp_3"
                    titulo="¿?"
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                
                />
                <Desplegable
                    nombre="Desp_4"
                    titulo="¿?"
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                
                />
                <Desplegable
                    nombre="Desp_5"
                    titulo="¿?"
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
                
                />
            </div>
            <Separador altura="20px" />
            <Footer/>
        </div>
    )
}