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
        }
    },
});

export default paleta_main;