import React from "react";
import "../stylesheets/footer.scss";
import Grid from '@mui/material/Grid';

function Footer() {
    return (
        <div className="main-footer">
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
            <Grid xs={12} container direction="column" justifyContent="center" alignItems="center">
                <p className="col-sm">
                    &copy;{new Date().getFullYear()} EcoIntelligence | All rights reserved | Terms Of Service | Privacy
                </p>
            </Grid>
            
            </div>
    );
}

export default Footer;