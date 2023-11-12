import React from "react";
import { createTheme } from "@mui/material/styles";

export const paleta_main = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#90DCB0',
          dark: '#81C49D',
          contrastText: '#fff',
          icon: '#fff'
        },
        secondary: {
          main: '#9CCB7F',
          contrastText: '#fff',
        },
        background:{
            default:'#D3EAC7'
        },
        preguntas:{
          main:'#EBF9E4',
          contrastText: '#7EA56A'
        },
        papel:{
          main:'#5BA3E5',
        },
        vidrio:{
          main:'#67E153',
        },
        lata:{
          main:'#EE4C4C',
        },
        plastico:{
          main:'#E5E05B',
        },
        mo:{
          main:'#EC9D54',
        },
        varios:{
          main:'#B1B1B1',
        }
    },
});

export default paleta_main;