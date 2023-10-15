import React from 'react'
import {useEffect, useState} from 'react';
import NavBar from '../components/nav_bar'
import { Bread_crumbs } from '../components/breadcrumbs';
import { Container, Drawer, Button, Box} from '@mui/material';
import BarChart from '../components/BarChart';
const data = [65, 59, 80, 81, 56, 55];
export const Mapa = () => {
    const [openDrawer,setOpenDrawer] = useState(false);
    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    }
    return (
        <>
            <NavBar />
            <Bread_crumbs />
            <Container maxWidth={false}>
                <Button onClick={toggleDrawer}>
                    abrir
                </Button>
                <Drawer
                    anchor='bottom'
                    open={openDrawer}
                    onClose={toggleDrawer}
                >
                    <Container maxWidth={false} sx={{display:'flex',justifyContent:'center'}}>
                        <Box
                            sx={{width:600,display:'flex',justifyContent:'center'}}
                        >
                            <BarChart data={data}/>
                        </Box>
                    </Container>
                </Drawer>
            </Container>
        </>
    )
};
export default Mapa