import { FaTrophy, FaMedal } from "react-icons/fa";
function Awards() {
    return (
        <section className="awards-section py-5 bg-white overflow-hidden" id="awards">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6 position-relative text-center mb-5 mb-lg-0">

                        <img
                            src="./src/assets/awards-bg.png"
                            alt="Awards Background"
                            className="img-fluid awards-bg"
                        />

                        <img
                            src="./src/assets/awards-person.png"
                            alt="Photographer"
                            className="img-fluid awards-person"
                        />

                    </div>

                    <div className="col-lg-6">

                        <h2 className="fw-bold display-6 awards-title mb-4">
                            AWARDS
                        </h2>

                        <p className="text-secondary mb-4 awards-intro">
                            I feel honored when they trust me capture their most
                            intimate moments. It's strange that photographers spend
                            years or even a lifetime trying to capture moments that,
                            when add together, don't even amount to couple of hours.
                        </p>

                        <div className="award-item mb-4">

                            <div className="d-flex align-items-center gap-3 mb-2">

                                <div className="award-icon d-flex align-items-center justify-content-center">
                                    <FaTrophy />
                                </div>

                                <h4 className="fw-bold mb-0">
                                    Best Photographer In 2020
                                </h4>

                            </div>

                            <p className="text-secondary mb-0">
                                It is one thing to take a picture of what someone
                                looks like, and it is another thing to make a
                                portrait of who they are.
                            </p>

                        </div>

                        <div className="award-item">

                            <div className="d-flex align-items-center gap-3 mb-2">

                                <div className="award-icon d-flex align-items-center justify-content-center">
                                    <FaMedal />
                                </div>

                                <h4 className="fw-bold mb-0">
                                    Multi-Year Photographer In 2022
                                </h4>

                            </div>

                            <p className="text-secondary mb-0">
                                As a photographer, I try to tell a story through
                                pictures instead of words. A single tear can contain
                                an entire ocean. A photographer is aware of the tiny
                                moments in a person's life that reveal greater truths.
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Awards;