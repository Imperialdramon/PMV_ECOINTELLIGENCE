import React from "react"
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { IconButton, Stack, Typography } from "@mui/material"
import { Instagram, LinkedIn } from "@mui/icons-material"
import Divider from "@mui/material/Divider"
import Logo_2 from '../assets/Logo_2.png'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import EmailIcon from '@mui/icons-material/Email'

function Footer() {
    return (
        <>
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
            }}
            bgcolor="primary.dark"
            color="primary.contrastText"
            boxShadow={3}
            >
            <Grid container spacing={2}>
                <Grid xs={4}>
                    <Box
                        justifyContent="center"
                        display="flex"
                        alignContent="center"
                        marginTop="1rem"
                    >
                        <img src={Logo_2} alt="logo2" width={"80px"}></img>
                    </Box>
                </Grid>
                <Grid xs={5} container direction="column" justifyContent="flex-start">
                    <div style={{ textAlign: 'center' }}>
                        <Typography variant="h5" align='center' sx={{fontWeight:'bold'}} marginRight={"25%"}>Contacto</Typography>
                    </div>
                    <Stack textAlign={"justify"} flexWrap={"wrap"}>
                        <Typography> <FmdGoodIcon fontSize="body2" color="#5ba3e5"/> Av. Vicuña Mackenna 3939, 8940897 San Joaquín, Región Metropolitana</Typography>
                        <Typography> <EmailIcon fontSize="body2" color="#5ba3e5"/> ecointelligence.neds@gmail.com</Typography>
                    </Stack>
                </Grid>
                <Grid xs={3} container direction="column" justifyContent="center" alignItems={"center"}>
                    <Typography variant="h5" align='center' sx={{fontWeight:'bold'}}>Compartir</Typography>
                    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />}>
                        <IconButton item><svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" fill="#FFFFFF"/></svg></IconButton>
                        <IconButton item><Instagram fontSize="large" sx={{color:"primary.icon"}}/></IconButton>
                        <IconButton item><LinkedIn fontSize="large" sx={{color:"primary.icon"}}/></IconButton>
                    </Stack>
                </Grid>
            </Grid>
            <Grid  container direction="column" justifyContent="center" alignItems="center">
                <Typography variant="p" className="col-sm">
                    &copy;{new Date().getFullYear()} EcoIntelligence | Todos los derechos reservados.
                </Typography>
            </Grid>
        </Box>
        </>
    )
}

export default Footer