import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
/* img */
import logo from "../assets/img/logo.jpg"
import logoSmall from "../assets/img/logo-sm.jpg"
export const Header = () => {
    return (
        <div className="container-fluid p-0 bgHeader">
            <div className="container">
                <div className="row g-0">
                    <div className="col-8 mx-auto col-lg-3 py-2">
                        <HashLink smooth to="home#homeTop" className="col-12">
                            <img className="img-fluid" src={logo} alt="logo" />
                        </HashLink>
                    </div>
                    <div className="col-2 col-lg-3 d-flex justify-content-center align-items-center">
                        <a className="navbar-toggler text-white  d-block d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </a>
                    </div>
                    <div className="col-12 col-lg-6 text-danger d-flex justify-content-center align-items-center">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <div className="collapse navbar-collapse" id="navbarNav">
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
                                </div>
                            </div>
                        </nav>
                    </div>
                    {/* <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                        <form id='login' action="" method="post">
                            <div className="row text-white textShadow">
                                <div className="col-4 mb-3">
                                    <input type="text" className="form-control" id="user" placeholder="User" autoComplete="username" required />
                                </div>
                                <div className=" col-4 mb-3">
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" autoComplete="current-password"  required  />
                                </div>
                                <div className="col-4 mb-3">
                                    <button type="submit" className="btn btnGradientBlue">Login</button>
                                </div>
                            </div>
                        </form>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

