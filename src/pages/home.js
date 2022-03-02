import { HashLink } from 'react-router-hash-link';
import React, {  useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
/*componentes*/
import { Slider } from "../components/slider";
/* img */
export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		AOS.init({ duration: 1500 });
	}, []);
	return (
		<div className="container-fluid p-0">
			<Slider />
			<div className="container-fluid p-0 bg-light-brown font-brown">
				<div className="container py-5">
					<div className="col-12 text-center">
						<h1>¿Por qué Cannadream?</h1>
					</div>
					<div className="col-12">
						<p>
							En vista de que los tiempos están cambiando, en conjunto con el progreso social se está creando una apertura en la mentalidad de la sociedad joven, que busca romper todos los esquemas con los que crecieron las anteriores generaciones, basados en tabúes, miedos y creencias erróneas por falta de conocimiento, renace la idea de la posibilidad de la apertura de acceso a la planta, cuyos innumerables beneficios han sido desconocidos durante años debido a su estatus limitado.
						</p>
						<p>
							En una sociedad que busca el desarrollo, la tolerancia, el respeto y la diversificación en busca de una evolución del pensamiento humano hacia el progreso social; es casi imposible pensar el que se le cierre la puerta a la posibilidad del avance, tanto en términos de conocimiento y diversificación como en los beneficios sociales y económicos que trae consigo la planta Cannabis Sativa.
						</p>
					</div>
					<div className="row g-0">
						<div className="col-12 col-lg-4 p-1 p-lg-3">
							<div className="col-12 bg-medium-brown p-3 shadow">
								<div className="col-12 display-4 text-center"><i className="fas fa-hand-holding-heart"></i></div>
								<div className="col-12 fs-4 text-center">Salud y Bienestar</div>
								<div className="col-12">Ya sea que esté buscando aliviar el dolor, reducir la ansiedad, aliviar los músculos doloridos, mejorar la recuperación, combatir el estrés oxidativo, promover un peso saludable, mejorar la salud del corazón o mejorar la calidad de vida en general, tenemos una gran cantidad de productos para ayudarle.</div>
								<div className="col-12 text-end">
									<HashLink className="btn btn-orange" smooth to="/benefits#salud"> Más</HashLink>
								</div>
							</div>
						</div>
						<div className="col-12 col-lg-4 p-1 p-lg-3">
							<div className="col-12 bg-medium-brown p-3 shadow">
								<div className="col-12 display-4 text-center"><i className="fas fa-spa"></i></div>
								<div className="col-12 fs-4 text-center">Belleza y cuidado personal</div>
								<div className="col-12">Con la creciente demanda de productos para el cuidado de la piel derivados del cáñamo, hemos puesto a su disposición los productos mejorados de CBD de la más alta calidad en el mercado.</div>
								<div className="col-12 text-end">
									<HashLink className="btn btn-orange" smooth to="/benefits#belleza" > Más</HashLink>
								</div>
							</div>
						</div>
						<div className="col-12 col-lg-4 p-1 p-lg-3">
							<div className="col-12 bg-medium-brown p-3 shadow">
								<div className="col-12 display-4 text-center"><i className="fas fa-paw"></i></div>
								<div className="col-12 fs-4 text-center">Cuidado de mascotas</div>
								<div className="col-12">Tenemos para usted una línea principal de productos para mascotas de CBD. Fácil de administrar y muy eficaz para diferentes afecciones como: problemas de la cadera o las articulaciones, dolor, estrés, nerviosismo, agresión, sistema inmunológico débil y mucho más.</div>
								<div className="col-12 text-end">
									<HashLink className="btn btn-orange" smooth to="/benefits#animales"> Más</HashLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-12 bgHeader fs-3 fc-orange">
				<div className="col-12 col-lg-8 mx-auto p-3 ">
					Alrededor del mundo cada vez son más las personas, dejando atrás las ideas preconcebidas de la sociedad, y siendo testigos de la cantidad sorprendente de usos y beneficios del CBD, es por eso que ponemos a tu disposición una extensa variedad de productos a base de CBD, para una enorme cantidad de propósitos, desde salud, hasta belleza.
				</div>
			</div>
			{/* <div className="row g-0">
				{store.post.map((item, index) => {
					return (
						<div className="col-12 col-lg-4 p-0" key={index}>
							<Post
								title={item.title.rendered}
								yoast_head_json={item.yoast_head_json.og_description}
								link={item.link}
								url={item.fimg_url}
								date={item.modified_gmt}
								autor={item.author_meta.display_name}
								categories={item.categories.category_name}
							/>
						</div>
					);
				})}
			</div> */}
		</div>
	);
};
