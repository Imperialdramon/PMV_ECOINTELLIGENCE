import React from 'react';

const Box = ({ imagen, titulo, cuerpo }) => {
    return (
        <div className="box">
            <img src={imagen} alt="Imagen" sizes='10px'/>
            <h4>{titulo}</h4>
            <body>{cuerpo}</body>
        </div>
    );
};

export default Box;