import React from "react";
import { Link } from "react-router-dom";
import cafeteria from '../assets/img/partners/cafe.jpg';
import cerveza from '../assets/img/partners/cerveza.jpg';
import gym from '../assets/img/partners/gym.jpg';
import heladeria from '../assets/img/partners/heladeria.jpg';
import pizza from '../assets/img/partners/pizza.jpg';
import restaurant from '../assets/img/partners/restaurant.jpg';
import vape from '../assets/img/partners/vape.jpg';
import vete from '../assets/img/partners/vete.jpg';
export const Partners = () => {
    return (
        <div className="container-fluid p-0">
            <div className="slider slider_partners d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="text-center">¿Quieres ser un partner?</h1>
                    <h3>
                        Únase a la red de partners de CannaDream
                    </h3>
                </div>
            </div>
            <div className="container py-5">
                <h2 className="text-center">Por qué colaborar con nosotros</h2>
                <p>Proporcionamos orientación y activos de líderes del sector, ventas y tecnología, junto con oportunidades de redes de contactos. Contar con una estrategia en la que todos salen ganando, fomenta la cooperación y da impulso para lograr una colaboración exitosa. Colabore con otras personas que también están innovando, logrando sus objetivos, entusiasmadas y motivadas para expandir su negocio.</p>
            </div>
            <div className="container-fluid p-0 bg_dark_orange py-5">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-4 p-1">
                            <div className="col-12 text-white rounded shadow bg_dark_medium py-4">
                                <div className="display-3 text-center">
                                    <i className="fas fa-utensils"></i>
                                </div>
                                <div className="col-12 p-3">
                                    <p>Nos encontramos con una gran variedad de productos alimenticios que contienen CBD y que cada día va en aumento. Entre otros motivos por la creciente demanda por parte de los consumidores que desean obtener los beneficios de incluir el CBD en su dieta. Entre otros, podemos encontrarnos chocolates, chicles, galletas, refrescos, gominolas e incluso café, infusiones o vino.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-1">
                            <div className="col-12 text-white rounded shadow bg_dark_medium py-4">
                                <div className="display-3 text-center">
                                    <i className="fas fa-vials"></i>
                                </div>
                                <div className="col-12 p-3">
                                    <p>Simplemente tendremos que utilizar un aceite vegetal (generalmente de oliva, de cáñamo o de sésamo) que mezclaremos con la planta decarboxilada, lo que nos permitirá “activar” los cannabinoides. Esta mezcla la volveremos a calentar para extraer los cannabinoides, que pasarán al aceite que hayamos empleado</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-1">
                            <div className="col-12 text-white rounded shadow bg_dark_medium py-4">
                                <div className="display-3 text-center">
                                    <i className="fas fa-balance-scale"></i>
                                </div>
                                <div className="col-12 p-3">
                                    <p>Congreso de Costa Rica legaliza el cannabis medicinal y el cáñamo. La ley permitirá a las autoridades costarricenses otorgar licencias para la producción e industrialización del cannabis con fines médicos o terapéuticos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 className="text-center pt-5">Nuestros Partners</h2>
                <div id="carousel_partners" className="carousel carousel-dark slide py-5" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carousel_partners" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousel_partners" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousel_partners" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src={cafeteria} className="logo_partner" alt="cafeteria" />
                            <img src={cerveza} className="logo_partner" alt="cerveza" />
                            <img src={gym} className="logo_partner" alt="gym" />
                            <img src={heladeria} className="logo_partner" alt="heladeria" />

                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={pizza} className="logo_partner" alt="pizza" />
                            <img src={restaurant} className="logo_partner" alt="restaurant" />
                            <img src={vape} className="logo_partner" alt="vape" />
                            <img src={vete} className="logo_partner" alt="vete" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carousel_partners" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carousel_partners" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="container text-center ">
                <Link to="/contact" className="text-center btn btn-orange my-2 fs-3">Contactanos para más información</Link>
            </div>
        </div>
    )
}