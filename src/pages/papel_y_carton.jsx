import React from 'react';
import NavBar from '../components/nav_bar'
import { Bread_crumbs } from '../components/breadcrumbs';

export const Papel_Carton = () => {
    return (
        <>
            <NavBar />
            <Bread_crumbs />
            <div>
                <h1 >Mi Nueva Página</h1>
                <p>Este es un nuevo prototipo de página.</p>
            </div>
        </>
    );
};

export default Papel_Carton;