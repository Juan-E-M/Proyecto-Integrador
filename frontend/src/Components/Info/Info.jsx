import React from "react";
import imgprin from "../../assets/imagesvg/imgprin.svg";
import basura from "../../assets/images/basura1.jpg";
import basura2 from "../../assets/images/basura2.jpg";
import basura3 from "../../assets/images/basura3.jpg";
const Info = () => {
    return (
        <main>
            <div class=".container-fluid">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light">Proyecto CleanTheWorld</h1>
                        <p class="lead text-muted">Este proyecto tiene como objetivo reducir la contaminacion en la ciudad de arequipa
                            y incentivar el reciclaje</p>
                        <p>
                            <button href="#" class="btn btn-success">ver productos</button>
                        </p>
                        <div class="d-flex justify-content-center">
                            <img src={imgprin} alt="" class="img-fluid" />
                        </div>
                    </div>
                </div>

            </div>
            <div class="d-flex justify-content-center">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={basura} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={basura2} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={basura3} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="col-lg-6 col-md-8 mx-auto">
                <div class="row">
                    <div class="col">
                        <h3 className="fw-light">stitulo1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eveniet, quam eos. Consectetur expedita exercitationem
                            nostrum saepe iste, libero repudiandae ratione, deserunt doloribus
                            quo voluptas alias est mollitia laboriosam molestiae odio.</p>
                    </div>
                    <div class="col">
                        <h3 className="fw-light">situlo2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eveniet, quam eos. Consectetur expedita exercitationem
                            nostrum saepe iste, libero repudiandae ratione, deserunt doloribus
                            quo voluptas alias est mollitia laboriosam molestiae odio.
                        </p>
                    </div>
                    <div class="col">
                        <h3 className="fw-light">stitulo3</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eveniet, quam eos. Consectetur expedita exercitationem
                            nostrum saepe iste, libero repudiandae ratione, deserunt doloribus
                            quo voluptas alias est mollitia laboriosam molestiae odio.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Info;