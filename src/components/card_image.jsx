import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Box, CardActionArea, CardMedia, Stack, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'

function ImgMediaCard({ titulo, color, color_border, enlace, img }) {
    const borde = '2px solid ' + color_border
    const handleButtonClick = () => {
        window.location.href = enlace // Dirección de envío del enlace
    }
    const cardStyles = {
        backgroundColor: color, // Color del fondo de la carta
        border: borde,
        borderRadius: '20px',
        boxShadow: '0 5px 4px rgba(0,0,0,0.1)',
        maxWidth: '100%', // Ancho máximo de la carta
        m: 1,
    }
    return (
    <Card sx={cardStyles}>
        <CardActionArea onClick={handleButtonClick}>
            <Grid container >
            <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align='center'>
                        {titulo}
                    </Typography>
            </CardContent>
            <CardMedia 
                component="img" 
                image={img} 
                alt="containter"
                sx={{ width: 100 }}
                />
            </Grid>
        </CardActionArea>
    </Card>
    )
}

export default ImgMediaCard