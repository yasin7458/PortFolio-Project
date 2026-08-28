function Home() {
    return (
        <section
            id="home"
            className="py-5 overflow-hidden Home"
        >
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6">
                        <div className="position-relative z-1 ">

                            <p className="mb-2 text-secondary small P1">
                                Hello Dreamer
                            </p>

                            <h1 className="mb-3 fw-normal display-5 ">
                                This is{" "}
                                <strong className="fw-bold">
                                    FOTOGRAAF
                                </strong>
                            </h1>

                            <p className="text-secondary  P2">
                                I'm a photographer who loves to
                                capture and explore new places.
                                Let's capture your special moments
                                together.
                            </p>

                            <a
                                href="#contact"
                                className="btn px-4 py-2 mt-2"
                            >
                                Let's Talk
                            </a>

                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="hero-image-wrapper d-flex align-items-end justify-content-center position-relative overflow-hidden">

                            <img
                                src="/src/assets/image1.png"
                                alt="Photographer"
                                className="img-fluid position-relative z-1"
                            />

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Home;