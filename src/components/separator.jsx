import React from 'react'

// Función para separar entre componentes
function Separador({ altura }) {
    return <div style={{ marginTop: altura || '10px' }} />
}

export default Separador