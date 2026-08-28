function Experience() {
    return (
        <section
            className="py-5 experince"
        >
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6">
                        <div>

                            <h2 className="fw-bold mb-2 experience-title">
                                EXPERIENCE
                            </h2>

                            <p className="mb-4 experience-intro">
                                Great photography is about conveying emotion, not just what's
                                in the frame. To me, Photography is an art of observation.
                                It's about finding something interesting in an ordinary plac.
                                I've found it has little to do with the things you see and
                                everything to do with the way you see.
                            </p>

                            <div className="mb-4">
                                <h3 className="fw-bold mb-2 experience-item-title">
                                    <span className="experience-dot">•</span>
                                    Jr. Photographer
                                </h3>

                                <p className="mb-0 experience-item-text">
                                    In 2014 to 2024 this is one of the most important tips
                                    for taking great photos. If you see something that
                                    catches your eye.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="fw-bold mb-2 experience-item-title">
                                    <span className="experience-dot">•</span>
                                    Sr. Photographer
                                </h3>

                                <p className="mb-0 experience-item-text">
                                    In 2014 to 2018 this is one of the most important tips
                                    for taking great photos. If you see something that
                                    catches your eye.
                                </p>
                            </div>

                            <a
                                href="#"
                                className="btn fw-semibold px-4 py-2 mt-1 experience-btn"
                            >
                                Download CV
                            </a>

                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-center align-items-center">
                            <img
                                src="/src/assets/experience.png"
                                alt="Photographer"
                                className="img-fluid experience-img"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Experience;