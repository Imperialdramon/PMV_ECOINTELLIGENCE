import React from 'react'
import { Breadcrumbs, Typography } from '@mui/material'
import { Container } from '@mui/material'
import {Link} from '@mui/material'
import { useLocation } from 'react-router-dom'

export const Bread_crumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    const diccionario = {
        '/sobre_nosotros': 'Sobre Nosotros',
        '/informacion':'Información sobre el Reciclaje',
        '/informacion/papel_y_carton': 'Papel y Cartón',
        '/informacion/vidrio': 'Vidrio',
        '/informacion/lata': 'Lata',
        '/informacion/plastico': 'Plástico',
        '/informacion/material_organico': 'Material Orgánico',
        '/informacion/varios': 'Varios',
        '/mapa':'Mapa Interactivo',
        '/grafos': 'Prueba Gráficos',

        '/noticias': 'Noticias',
        
        '/preguntas_frecuentes': 'Preguntas Frecuentes'
    }
    return (
        <>
            <Container maxWidth={false} className='BreadCrumb-Bar'>
                <Breadcrumbs separator=">" aria-label="breadcrumb" color="white">
                    <Link underline="hover" color="inherit" href="/" className='bread-link'>
                        Inicio
                    </Link>
                    {pathnames.map((_,index) => {
                        const last = index === pathnames.length - 1;
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                        return last ? (
                            <Typography>
                                {diccionario[to]}
                            </Typography>
                        ) : (
                            <Link underline="hover" color="inherit" href={to} className='bread-link'>
                                {diccionario[to]}
                            </Link>
                        )
                    })}
                </Breadcrumbs>
            </Container> 
        </>
    )
};