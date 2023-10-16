import React from 'react';
import NavBar from '../components/nav_bar'
import { Bread_crumbs } from '../components/breadcrumbs';
import Box from '../components/box';
import '../stylesheets/box.scss';
import LogoUSM from '../assets/usm.png'
import { Container } from '@mui/system';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Footer from '../components/footer';
import '../stylesheets/page/page__container.scss';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Informacion = () => {
    return (
        <div className='page__container'>
            <NavBar />
            <Bread_crumbs />
            <div className="content-wrap">
                <h3>Texto genérico</h3>
                <Container maxWidth="false" sx={{display:'flex', justifycontent:'center'}}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                            <Item>
                                <Box
                                    imagen={LogoUSM}
                                    titulo="Texto del recuadro 1"
                                    cuerpo="A"
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                        <Item>
                            <Box
                                    imagen={LogoUSM}
                                    titulo="Texto del recuadro 1"
                                    cuerpo="A"
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                        <Item>
                            <Box
                                    imagen={LogoUSM}
                                    titulo="Texto del recuadro 1"
                                    cuerpo="A"
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                        <Item>
                            <Box
                                    imagen={LogoUSM}
                                    titulo="Texto del recuadro 1"
                                    cuerpo="A"
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                        <Item>
                            <Box
                                    imagen={LogoUSM}
                                    titulo="Texto del recuadro 1"
                                    cuerpo="A"
                                />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                        <Item>
                            <Box
                                    imagen={LogoUSM}
                                    titulo="Texto del recuadro 1"
                                    cuerpo="A"
                                />
                            </Item>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Footer/>
        </div>
    );
};

export default Informacion;