function Contact() {
    return (
        <section className="contact-section bg-white" id="contact">
            <div className="container">

                <div className="row align-items-center contact-box">

                    <div className="col-lg-6 px-4 px-lg-5 py-5">

                        <h2 className="fw-bold mb-4 contact-title">
                            CONTACT ME
                        </h2>

                        <form>

                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="First Name"
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="Phone"
                                />
                            </div>

                            <div className="mb-4">
                                <textarea
                                    className="form-control"
                                    rows="5"
                                    placeholder="Write Your Message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn contact-btn px-4 py-2 fw-bold"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>


                    {/* ================= RIGHT SIDE ================= */}
                    <div className="col-lg-6 contact-image-wrapper">

                        <img
                            src="./src/assets/awards-bg.png"
                            alt="Contact Background"
                            className="img-fluid contact-bg"
                        />

                        <img
                            src="./src/assets/contact-person.png"
                            alt="Contact Person"
                            className="img-fluid contact-person"
                        />

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;