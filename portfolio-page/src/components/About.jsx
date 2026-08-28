function About() {
    return (
        <section
            id="about"
            className="py-5 bg-white overflow-hidden"
        >
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6">
                        <div className="d-flex align-items-end justify-content-center">
                            <img
                                src="/src/assets/about-person.png"
                                alt="About Me"
                                className="img-fluid mb-4 about-person-img"
                            />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="pe-lg-3">

                            <h2 className="fw-bold mb-3 about-title">
                                ABOUT ME
                            </h2>

                            <p className="mb-3 about-text">
                                I'm an adventure seeker and photographer. I see
                                photography as an art of observation. It's about
                                finding the interesting in the ordinary... It
                                has little to do with what you see.
                            </p>

                            <p className="mb-3 about-text">
                                I wish that all nature, beauty, the emotion of
                                the land, the living energy of place could be
                                photographed. It's strange that photographers
                                spend years or even a whole lifetime.
                            </p>

                            <div className="mt-4">
                                <h4 className="fw-semibold mb-2 about-item-title d-flex align-items-center">
                                    <span className="about-dot">•</span>
                                    Query
                                </h4>

                                <p className="mb-0 about-item-text">
                                    We listen brilliantly and get to know you,
                                    your clients, brand, needs, expectations
                                    and goals.
                                </p>
                            </div>

                            <div className="mt-4">
                                <h4 className="fw-semibold mb-2 about-item-title d-flex align-items-center">
                                    <span className="about-dot">•</span>
                                    Invent
                                </h4>

                                <p className="mb-0 about-item-text">
                                    We define a clear strategy with inventive
                                    solutions, suited precisely for your needs.
                                </p>
                            </div>

                            <div className="mt-4">
                                <h4 className="fw-semibold mb-2 about-item-title d-flex align-items-center">
                                    <span className="about-dot">•</span>
                                    Implement
                                </h4>

                                <p className="mb-0 about-item-text">
                                    We take pride in the efficiency of our
                                    production and workflow, leaving you
                                    stress-free in the hands of the perfect
                                    team.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;