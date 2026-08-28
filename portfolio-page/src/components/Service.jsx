import {
    FaHeart,
    FaWineGlass,
    FaTshirt,
    FaCamera
} from "react-icons/fa";

function Service() {
    return (
        <section className="py-5 bg-white" id="services">
            <div className="container">

                <div className="text-center mb-5">

                    <h2 className="fw-bold mb-3 service-title">
                        WHAT CAN I DO FOR YOU
                    </h2>

                    <p className="mx-auto mb-0 service-description">
                        Great photography is about conveying emotion, not just what's in
                        the frame. To me, photography is an art of observation. It's about
                        finding something interesting in an ordinary place
                    </p>

                </div>

                <div className="row g-4">

                    <div className="col-lg-4 col-md-6">
                        <div className="p-4 position-relative service-card overflow-hidden">

                            <FaCamera className="camera-bg" />

                            <div className="service-icon mb-4  d-flex align-items-center justify-content-center  ">
                                <FaHeart />
                            </div>

                            <h3 className="fw-bold mb-3 service-card-title">
                                Wedding Photography
                            </h3>

                            <p className="mb-0 service-card-text">
                                I take my time, I don't force things, I just feel absorb
                                emotions that are floating around. I capture moments as
                                they come.
                            </p>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="p-4 position-relative service-card overflow-hidden">

                            <FaCamera className="camera-bg" />

                            <div className="service-icon mb-4 d-flex align-items-center justify-content-center">
                                <FaWineGlass />
                            </div>

                            <h3 className="fw-bold mb-3 service-card-title">
                                Still Life Photography
                            </h3>

                            <p className="mb-0 service-card-text">
                                I take camera with me to cafe, while traveling and to
                                school. I am able capture the situations I'm exposed
                                people I meet.
                            </p>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="p-4 position-relative service-card overflow-hidden">

                            <FaCamera className="camera-bg" />

                            <div className="service-icon mb-4 d-flex align-items-center justify-content-center">
                                <FaTshirt />
                            </div>

                            <h3 className="fw-bold mb-3 service-card-title">
                                Fashion Photography
                            </h3>

                            <p className="mb-0 service-card-text">
                                I try to bring all elements together, focus on details
                                and create a cohesive whole. It doesn't matter I'm
                                just taking pictures.
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Service;