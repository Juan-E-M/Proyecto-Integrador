import React from "react";
import equipo from "../../assets/images/equipo.jpeg" 
import basura from "../../assets/images/basura.jpg"
import soluciones from "../../assets/images/soluciones.jpg"
import reciclar from "../../assets/images/reciclar.jpg"

import "../../assets/css/Nosotros.css"

const Body = () => {
    return (
        <div className="general-container-about-us">
            <div className="grid-container-lr">
                <div className="grid-container-l">
                    <h2>Nuestro equipo</h2>
                        <p>Somos una corporación líder, apasionada, comprometida con el manejo responsable y eficiente de los residuos sólidos aprovechables, en armonía con las características de una economía circular.
                        Velamos por dignificar la labor de nuestros recuperadores y aportar al mundo, con la suma de nuestro trabajo, un mejor medio ambiente para nuestros hijos.</p>
                </div>
                <div className="grid-container-r">
                    <img src={equipo} className="images-from-body"/>
                </div>
            </div>
            <div className="grid-container-lr">
                <div className="grid-container-r">
                <img src={basura} className="images-from-body"/>
                </div>
                <div className="grid-container-l">
                    <h2>Problema</h2>
                    <p>Mal tratamiento de la basura en Arequipa, domésticamente como municipalmente</p>
                </div>
            </div>
            <div className="grid-container-lr">
                <div className="grid-container-l">
                    <h2>Soluciones</h2>
                    <ul><li>
                    Creación de un tacho inteligente que cuente nuestros residuos diarios
                        </li></ul>
                    <ul><li>
                    Aplicación móvil que presente estadísticas de nuestro reciclaje , TOP 10 para siempre querer ser el que más recicla, visualización de eventos de Recicla en los que participas
                        </li></ul>
                    <ul><li>
                    Página web con toda la información necesaria para reciclar, participar en eventos y comprar productos que faciliten nuestro reciclaje
                        </li></ul>
                </div>
                <div className="grid-container-r">
                <img src={soluciones} className="images-from-body"/>
                </div>
            </div>
            <div className="grid-container-bg">

                    <div className="content-of-bg">
                        <h2>¿Por qué nosotros?</h2>
                        <p>Buscamos un bien común implementando tecnología para facilitar el trabajo de reciclar</p>
                        <h2>¿Y entonces?</h2>
                        <p>Es hora de invertir tiempo y esfuerzo en reciclar cuanto antes tomemos acción antes veremos los cambios y el progreso comunitario</p>
                    </div>
                </div>

        </div>
    )
} 

export default Body