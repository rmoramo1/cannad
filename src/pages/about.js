import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Helmet } from "react-helmet";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";

/* img */
export const About = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    return (
        <div className="container-fluid bg-light-brown p-0">
            <div className="slider-pages slider-about slider-title text-white fs-3 d-flex align-items-center">
                <div className="col-12 col-lg-6 mx-auto ps-3">
                    <h1>
                        ¿Quiénes somos?
                    </h1>
                </div>
            </div>
            <div className="container font-brown py-5">
                <div className="col-12">
                    <p>
                        Cannadream una empresa que busca, por encima de todo, romper los tabúes que la sociedad ha creado alrededor del concepto del CBD, el cual se ha enfocado en limitar el conocimiento y entendimiento holístico de lo que realmente se trata el cannabis. En Cannadream hemos estudiado y reconocido la enorme cantidad de beneficios de la planta Cannabis Sativa, y queremos compartirlos de la manera más profesional, impulsando el desarrollo de esta industria en pro de la salud y el cuidado personal.
                    </p>
                </div>
                <div className="row g-0">
                    <div className="col-12 col-lg-6 p-3">
                        <div className="col-12 text-center display-2"><i className="fas fa-award"></i></div>
                        <div className="col-12">
                            <p>
                                Gracias a nuestro extenso conocimiento en la industria, aseguramos que los productos que ofrecemos son de la más alta calidad, desde cultivo, hasta procesos, son llevados a cabo por expertos, para asegurar la preservación de todas las cualidades de la planta y llegar hasta nuestros clientes con lo mejor del CBD.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 p-3">
                        <div className="col-12 text-center display-2"><i className="fas fa-globe-americas"></i></div>
                        <div className="col-12">
                            <p>
                                Uno de nuestros principales objetivos es dar a conocer en la región, todos los beneficios que los productos a base de CBD, traen a la salud, belleza e incluso para los animales, rompiendo tabúes erróneos que nacen de la falta de conocimiento.
                            </p>
                        </div>
                    </div>
                    <div className="col-12">
                        <p>Sabemos que en la actualidad, existen muchísimas corporaciones que se aprovechan de la falta de conocimiento sobre el CBD, para vender productos de no tan alta calidad, ofreciendo soluciones completamente inventadas e irracionales; es por eso que procuramos por encima de vender un producto, compartir conocimiento sobre el CBD y todas las formas en las que puede ser utilizado para el beneficio del ser humano.</p>
                    </div>
                </div>
            </div>
            <div className="col-12 bgHeader fs-3 fc-orange">
                <div className="col-12 col-lg-8 mx-auto p-3 ">
                    Ya sea que esté buscando aliviar el dolor, reducir la ansiedad, aliviar los músculos doloridos, mejorar la recuperación, combatir el estrés oxidativo, promover un peso saludable, mejorar la salud del corazón o mejorar la calidad de vida en general, tenemos una gran cantidad de productos para ayudarle.
                </div>
            </div>
        </div>
    );
};
