import React from "react"
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

function Footer() {
    return (
        <>
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: "rgb(37, 226, 34)",
            }}
            >
            <Grid container spacing={2}>
                <Grid xs={4} container direction="column" justifyContent="center" alignItems="center">
                    <h3>EcoIntelligence 1</h3>
                    <ui className="list-unstyled">
                        <li>Coordenadas</li>
                        <li>Santiago, Chile</li>
                        <li>321 calle ecológica</li>
                    </ui>
                </Grid>
                <Grid xs={4} container direction="column" justifyContent="center" alignItems="center">
                    <h3>EcoIntelligence 2</h3>
                    <ui className="list-unstyled">
                        <li>Coordenadas</li>
                        <li>Santiago, Chile</li>
                        <li>321 calle ecológica</li>
                    </ui>
                </Grid>
                <Grid xs={4} container direction="column" justifyContent="center" alignItems="center">
                    <h3>EcoIntelligence 3</h3>
                    <ui className="list-unstyled">
                        <li>Coordenadas</li>
                        <li>Santiago, Chile</li>
                        <li>321 calle ecológica</li>
                    </ui>
                </Grid>
            </Grid>
            <Grid  container direction="column" justifyContent="center" alignItems="center">
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} EcoIntelligence | All rights reserved | Terms Of Service | Privacy
                </p>
            </Grid>
        </Box>
            
        </>
    )
}

export default Footer