export const Slider = () => {
    return (
        <div className="container-fluid p-0">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active slider1">
                        <div className="text-white fs-3 slider slider-title d-flex align-items-center justify-content-center">
                            <p className="col-10 col-lg-6">
                                Tenemos una variedad de productos completamente orgánicos, efectivos para tratamientos de salud, bienes, belleza y cuidado personal.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item slider2">
                        <div className="slider text-white fs-3 slider-title d-flex align-items-center justify-content-center">
                            <p className="col-10 col-lg-6">
                                Todos nuestros procesos de creación de productos, se llevan a cabo bajo rigurosos estándares de calidad para asegurar que cada producto pueda satisfacer las necesidades de nuestros clientes.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item slider3">
                        <div className="slider text-white fs-3 slider-title d-flex align-items-center justify-content-center">
                            <p className="col-10 col-lg-6">
                                Desde beneficios en términos de salud, hasta creación de telas, comestibles e incluso medicamento para animales, el CBD se manifiesta como un producto casi milagroso.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item slider4">
                        <div className="slider text-white fs-3 slider-title d-flex align-items-center justify-content-center">
                            <p className="col-10 col-lg-6">
                                NUESTROS PRODUCTOS: Sin químicos fuertes, sin pesticidas, sin metales, vegano, libres de gluten, 100% orgánico, No contiene THC.
                            </p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}