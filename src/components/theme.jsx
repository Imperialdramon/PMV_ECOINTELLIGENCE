import React from "react";
import { createTheme } from "@mui/material/styles";

export const paleta_main = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#90DCB0',
          contrastText: '#fff',
        },
        secondary: {
          main: '#45c4b0',
          contrastText: '#fff',
        },
        fondo:{
            main:'#D3EAC7'
        }
    },
});

export default paleta_main;