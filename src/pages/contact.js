import { Helmet } from "react-helmet";
import { send } from 'emailjs-com';
import React, { useState } from 'react';
import "../../node_modules/aos/dist/aos.css";
export const Contact = () => {

    const [toSend, setToSend] = useState({
        fullname: '',
        email: '',
        message: '',
        phone: '',
    });

    const contact = (e) => {
        e.preventDefault();
        send(
            'service_5ihc1yh',
            'template_wxz9lki',
            toSend,
            'user_ueDJqGkpi3yp8nodYgnsk'
        )
            .then((response) => {
                alert("The form was sent correctly");
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                alert("The form was not submitted correctly");
                console.log('FAILED...', err);
            });
        e.target.reset()
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    return (
        <div className="container-fluid p-0 font-brown">
            <div className="row g-0">
                <div className="col-12 col-lg-6 bg-light-brown contact-span d-flex justify-content-center align-items-center">
                    <form onSubmit={contact} className="text-uppercase">
                        <div className="col-12 offset-xl-3 col-xl-6 p-2">
                            No dude en contactarnos si tiene alguna duda
                        </div>
                        <div className="row g-0">
                            <div className="col-12 offset-xl-3 col-xl-6">
                                <input className="col-12 my-2 rounded shadow" name="fullname" id="fullname" type="text" placeholder="Nombre " aria-label="fullname" value={toSend.fullname} onChange={handleChange} required />
                            </div>
                            <div className="col-12 offset-xl-3 col-xl-6">
                                <input className="col-12 my-2 rounded shadow" name="phone" id="phone" type="tel" placeholder="Teléfono" aria-label="phone" value={toSend.phone} onChange={handleChange} required />
                            </div>
                            <div className="col-12 offset-xl-3 col-xl-6">
                                <input className="col-12 my-2 rounded shadow" name="email" id="emailAddress" type="mail" placeholder="Correo" aria-label="emailAddress" value={toSend.email} onChange={handleChange} required />
                            </div>
                            <div className="col-12 offset-xl-3 col-xl-6">
                                <textarea className="col-12 my-2 rounded shadow" id="message" name="message" rows="5" placeholder="Mensaje" value={toSend.message} onChange={handleChange}></textarea>
                            </div>
                            <div className="col-12 text-center py-5">
                                <button className="btn btn-orange" type="submit">Enviar <i className="bi bi-arrow-right"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-12 col-lg-6 bg-light-brown contact-span img-contact"></div>
            </div>
        </div>
    )
}