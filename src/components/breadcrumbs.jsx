import React from 'react'
import { Breadcrumbs, Typography } from '@mui/material'
import { Container } from '@mui/material'
import {Link} from '@mui/material'
import { useLocation } from 'react-router-dom'

export const Bread_crumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    return (
        <>
            <Container maxWidth={false} className='BreadCrumb-Bar'>
                <Breadcrumbs separator=">" aria-label="breadcrumb" color="white">
                    <Link underline="hover" color="inherit" href="/">
                        inicio
                    </Link>
                    {pathnames.map((values,index) => {
                        const last = index === pathnames.length - 1;
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                        return last ? (
                            <Typography>
                                {values}
                            </Typography>
                        ) : (
                            <Link underline="hover" color="inherit" href={to} className='bread-link'>
                                {values}
                            </Link>
                        )
                    })}
                </Breadcrumbs>
            </Container> 
        </>
    )
};