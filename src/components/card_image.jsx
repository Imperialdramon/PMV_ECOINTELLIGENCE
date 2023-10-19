import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Separador from './separator'

function ImgMediaCard({ src_imagen, alto, alto_max, titulo, texto, color,enlace}) {
    const handleButtonClick = () => {
        window.location.href = enlace // Dirección de envío del enlace
    }
    const cardStyles = {
        backgroundColor: color, // Color del fondo de la carta
        border: 10,
        borderRadius: 10,
        boxShadow: '0 5px 4px rgba(0,0,0,0.1)',
        maxWidth: 600, // Ancho máximo de la carta
        m: 1,
    }
    return (
    <Card sx={cardStyles}>
        <Separador altura="20px"/>
        <CardMedia
            component="img"
            alt="usm"
            height={alto}
            style={{ maxWidth: '100%', maxHeight: {alto_max}, objectFit: 'contain'}}
            image={src_imagen}
            
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {titulo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {texto}
            </Typography>
        </CardContent>
        <CardActions>
            <Button onClick={handleButtonClick} size='small'>
                Ver más información
            </Button>
        </CardActions>
    </Card>
    )
}

export default ImgMediaCard