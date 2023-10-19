import React from 'react';
import NavBar from '../../components/nav_bar'
import { Bread_crumbs } from '../../components/breadcrumbs';
import Footer from '../../components/footer';
import '../../stylesheets/page/page__container.scss';
import Separador from '../../components/separator';
import new_01 from '../../assets/news_01.jpg';

export const News_01 = () => {
    const lineaDeGradado = {
      width: '100%',
      height: '1px',
      background: 'radial-gradient(ellipse at center, #333 0%, transparent 70%, #333 100%)',
    };
    const posRelative = {
        position: 'absolute', // Establece la posición como absoluta
        top: '200px', // Ajusta la distancia desde la parte superior
        left: '100px', // Ajusta la distancia desde la izquierda
      };
  
    return (
      <div className='page__container'>
        <NavBar />
        <Bread_crumbs />
        <div>
            <h1 style={{ textAlign: 'center' }}><b>Comienza retiro de residuos reciclables desde 750 mil domicilios capitalinos</b></h1>
            <p style={posRelative}><strong>Publicado:</strong> Domingo, 1 de Octubre de 2023 <strong>| Periodista Digital:</strong> <a href='https://www.cooperativa.cl'>Coperativa.cl</a></p>
            <div style={lineaDeGradado}></div>
            <br></br>
            <br></br>
            <div style={{ textAlign: 'center' }}>
                <img src={new_01} style={{ width: '800px', height: '400px' }}/>
                <br></br>
                <p style={{ textAlign: 'justify' }}>
                    Este lunes comienza el Plan de Recolección de Residuos Reciclables en 35 comunas del país, enfocado principalmente en la Región Metropolitana, donde 24 de ellas tendrán un servicio de recolección de reciclaje, aparte del de la basura.
                    Según consignó El Mercurio, la medida forma parte de las etapas de implementación de la Ley N°20.920 de Responsabilidad Extendida del Productor, que los obliga a hacerse cargo de los residuos que generan y disponer de un sistema de gestión 
                    de residuos que vaya a buscarlos al domicilio, es decir, un camión recolector, además, de puntos verdes y otros contenedores.
                    La implementación de esta segunda etapa será gradual y espera llegar al 80% de los hogares del país, y corresponde al reciclaje de envases y embalajes. En específico se trata de: 
                    cartón para líquidos (tetrapack), metal (latas o conservas), papel y cartón (empaques), y plásticos como envases de bebidas o bolsas de arroz.
                </p>
            </div>


        </div>
        <Separador altura="20px" />
        <Footer />
      </div>
    );
  };
  
  export default News_01;
  