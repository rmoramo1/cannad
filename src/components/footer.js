import { HashLink } from 'react-router-hash-link';
import logoWhite from '../assets/img/logo-white.png'
export const Footer = () => {
    return (
        <div className="container-fluid p-0 py-3 bg-green text-center text-white" id="footer">
            <div className="row g-0">
                <div className="col-12 col-lg-6 p-3">
                    <nav className="navbar navbar-expand-lg justify-content-center">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <HashLink className="nav-link" aria-current="page" to="/about-us">Sobre Nosotros</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" to="/benefits">Beneficios</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" to="/construction">e-Commerce</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" to="/partners">Partners</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" to="/contact">Contacto</HashLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-12 col-lg-3 p-3 d-flex justify-content-center align-items-center">
                    Copyright CannaDream 2021
                </div>
                <div className="col-12 col-lg-3 p-3">
                    <img src={logoWhite} alt="logo white version"></img>
                </div>
            </div>
        </div>
    )
}