import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function Desplegable({nombre,titulo,textos}) {
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
                        maxWidth: '85%',
                        backgroundColor:"preguntas.main",
                        color:"preguntas.contrastText"
                    }}
                >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls= {aria_controls}
                    id={id}
                    >
                    <Typography align='center' alignContent='center' variant='h5' sx={{fontWeight:'bold'}}>
                        {titulo}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {textos.map((texto) => (
                        <>
                            <Typography align='justify' variant='subtitle1' fontSize='20px'  lineHeight={1.2}>
                                {texto}
                            </Typography>
                            <br/>
                        </>
                    ))}
                    
                </AccordionDetails>
            </Accordion>
        </div>
    )
}