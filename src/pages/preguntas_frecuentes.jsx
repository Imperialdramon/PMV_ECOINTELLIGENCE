import * as React from 'react'
import Desplegable from "../components/desplegable"
import Typography from '@mui/material/Typography'
import NavBar from '../components/nav_bar'
import { Bread_crumbs } from '../components/breadcrumbs'
import Footer from '../components/footer'
import '../stylesheets/page/page__container.scss'
import Separador from '../components/separator'



export default function Preguntas_Frecuentes() {
    const [expanded, setExpanded] = React.useState('panel1')
    const handleChange = (panel) => (_, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    }
    return (
        <div className='page__container'>
            <NavBar />
            <Bread_crumbs />
            <div className="content-wrap">
                <Typography variant='h3' align='center' sx={{fontWeight:'bold'}}>
                    Preguntas frecuentes
                </Typography>
                <Separador altura="20px" />
                <Desplegable
                    nombre="Desp_1"
                    titulo="¿Qué es el reciclaje?"
                    textos={["El reciclaje es un proceso esencial para la gestión sostenible de residuos y la conservación de recursos naturales. A través de la recolección, clasificación y procesamiento de materiales como papel, cartón, vidrio, plástico y metales, se les da una segunda vida al convertirlos en nuevos productos, reduciendo así la cantidad de desechos que llegan a vertederos. Esto no solo disminuye la contaminación ambiental, sino que también contribuye a la reducción de las emisiones de gases de efecto invernadero, ya que la fabricación a partir de materiales reciclados tiende a ser menos intensiva en energía que la producción con materias primas vírgenes. En última instancia, el reciclaje es una práctica fundamental para promover la sostenibilidad y preservar nuestro entorno natural."]}
                />
                <Desplegable
                    nombre="Desp_2"
                    titulo="¿Por qué es recomendable reciclar los desperdicios?"
                    textos={["Reciclar los desperdicios es recomendable por varias razones fundamentales:",
                    "Conservación de recursos naturales: El reciclaje reduce la necesidad de extraer y procesar recursos naturales, como árboles para la fabricación de papel, minerales para la producción de metales y petróleo para la creación de plásticos. Al reutilizar materiales existentes, se conservan estos recursos limitados.",
                    "Reducción de la contaminación: La acumulación de residuos en vertederos y su posterior descomposición pueden generar contaminantes ambientales y liberar gases de efecto invernadero. Al reciclar, se reduce la cantidad de residuos que se envían a vertederos y se minimiza la contaminación del suelo y del agua.",
                    "Ahorro de energía: La fabricación de productos a partir de materiales reciclados generalmente requiere menos energía en comparación con la producción a partir de materias primas vírgenes. Esto ayuda a disminuir las emisiones de gases de efecto invernadero y a reducir la demanda de recursos energéticos.",
                    "Generación de empleo: La industria del reciclaje crea puestos de trabajo en la recolección, clasificación, procesamiento y fabricación de productos reciclados. Esto contribuye al crecimiento económico local y a la generación de empleo en la comunidad.",
                    "Conciencia ambiental: El reciclaje promueve la conciencia ambiental y la responsabilidad individual en la gestión de residuos. Fomenta hábitos sostenibles y una mayor comprensión de la importancia de conservar el medio ambiente para las generaciones futuras.",
                    "Reducción de costos para los municipios: El reciclaje puede reducir los costos asociados con la gestión de residuos, como la recolección y eliminación de desechos en vertederos, lo que beneficia a las comunidades y a los contribuyentes."
                ]}
                />
                <Desplegable
                    nombre="Desp_3"
                    titulo="¿Cuál es la diferencia entre reciclaje y reutilización?"
                    textos={["El reciclaje implica el proceso de recolectar, procesar y convertir materiales usados en nuevos productos. En contraste, la reutilización significa usar un producto o material nuevamente sin alterar su forma o función original. El reciclaje generalmente implica la transformación de un material en algo nuevo, mientras que la reutilización implica utilizar un artículo existente de nuevo sin cambios significativos."]}
                />
                <Desplegable
                    nombre="Desp_4"
                    titulo="¿Dónde puedo encontrar contenedores de reciclaje?"
                    textos={["En el mapa interactivo se muestra la ubicación de algunas zonas de reciclaje ubicadas mediante la simbología presentada y además, puedes encontrar contenedores disponibles en áreas públicas, como parques, estaciones de tren, centros comerciales y calles. También puedes contactar a las autoridades locales o empresas de gestión de residuos para obtener información sobre la ubicación de los contenedores de reciclaje en tu área."]}
                />
                <Desplegable
                    nombre="Desp_5"
                    titulo="¿Cuál es el impacto del reciclaje en la reducción de la contaminación marina?"
                    textos={["El reciclaje ayuda a reducir la contaminación marina al disminuir la cantidad de plásticos y otros materiales desechados que terminan en océanos y mares. Esto protege la vida marina y preserva los ecosistemas acuáticos al reducir la ingestión de plástico por parte de los animales y la degradación ambiental."]}
                />
                <Desplegable
                    nombre="Desp_6"
                    titulo="¿Cómo se pueden reciclar de manera efectiva productos de vidrio quebrados?"
                    textos={["Los productos de vidrio quebrados se pueden reciclar, pero por seguridad, debes tomar precauciones para evitar cortes. Coloca los fragmentos de vidrio en una bolsa resistente o envuélvelos en periódico antes de ponerlos en el contenedor de vidrio. Esto evita riesgos de lesiones y facilita su manejo en las instalaciones de reciclaje"]}
                />
                <Desplegable
                    nombre="Desp_7"
                    titulo="¿Cómo se pueden reducir los consumos de productos plásticos o que alternativas existen?"
                    textos={["Para reducir el consumo de productos plásticos, puedes optar por productos reutilizables, como botellas de agua de acero inoxidable en lugar de botellas de plástico desechables, o llevar tus propias bolsas de tela al hacer compras. Además, puedes elegir productos con envases de vidrio, papel o cartón en lugar de plástico siempre que sea posible. La conciencia y elecciones conscientes son clave."]}
                />
                <Desplegable
                    nombre="Desp_8"
                    titulo="¿Dónde puedo encontrar más información sobre los impactos del reciclaje y beneficios?"
                    textos={["Puedes encontrar información adicional sobre los impactos y beneficios del reciclaje en sitios web gubernamentales, organizaciones ambientales, y en publicaciones académicas sobre gestión de residuos y sostenibilidad. También puedes consultar recursos locales, como los sitios web de tus autoridades municipales o nacionales, para obtener información específica sobre programas de reciclaje y datos sobre el impacto ambiental."]}
                />

            </div>
            <Separador altura="20px" />
            <Footer/>
        </div>
    )
}