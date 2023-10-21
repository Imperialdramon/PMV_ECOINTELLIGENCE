import * as React from 'react'
import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import Grid from '@mui/material/Grid'

function Proto_info({enlace,texto_1, texto_2, texto_3}) {
    const containerStyles = {
        display: 'flex',
        justifyContent: 'center', // Centra horizontalmente
        alignItems: 'center',     // Centra verticalmente
        height: '10%',         // Establece una altura al 100% de la vista
    }
    
    return (
        <Container maxWidth="false" sx={{display:'flex', justifycontent:'center'}}>
            <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <div style={containerStyles}>
                        <img
                            src={enlace} // Reemplaza con la ruta de tu imagen
                            width="60%" // Ancho deseado en píxeles
                            height="10%" // Alto deseado en píxeles
                            //style={imageStyles} // Aplica los estilos de posición
                        />
                    </div>
                </Grid>
                
                <Grid item xs={6}>
                    <Typography align='center' variant='h4'>
                        ¿Qué tipo de material se encuentra en esta categoría?
                    </Typography>
                    <Typography align='justify' variant='body1'>
                        {texto_1}
                    </Typography>
                    <Grid container alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6} md={6}>
                            <List dense={dense}>
                            {generate(
                                <ListItem>
                                <ListItemText
                                    primary="Single-line item"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                </ListItem>,
                            )}
                            </List>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <List dense={dense}>
                            {generate(
                                <ListItem>
                                <ListItemText
                                    primary="Single-line item"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                </ListItem>,
                            )}
                            </List>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={6}>
                    <Typography align='center' variant='h4'>
                        ¿Como se deben preparar los materiales para ser reciclados?
                    </Typography>
                    <Typography align='justify' variant='body1'>
                        {texto_2}
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Typography align='center' variant='h4'>
                        ¿Por qué es importante reciclar este tipo de materiales?
                    </Typography>
                    <Typography align='justify' variant='body1'>
                        {texto_3}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Proto_info