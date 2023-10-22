import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function Desplegable({nombre,titulo,texto}) {
    const id = {nombre} + "-header"
    const aria_controls = {nombre} + "-content"
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px'}} >
            <Accordion
                    sx={{
                        //bgcolor: 'background.paper',
                        //boxShadow: 1,
                        //borderRadius: 2,
                        //p: 2,
                        minWidth: '50%',
                        maxWidth: '70%',
                        backgroundColor:"preguntas.main",
                        color:"preguntas.contrastText"
                    }}
                >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls= {aria_controls}
                    id={id}
                    >
                    <Typography align='center' variant='h5'>
                        {titulo}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography align='justify'>
                        {texto}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}