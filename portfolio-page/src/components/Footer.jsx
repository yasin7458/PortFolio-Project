import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaArrowUp
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer-section">

            <div className="container">

                <div className="row py-5">

                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">

                        <img
                            src="https://wp.designtocodes.com/Fotograaf_V2/wp-content/uploads/sites/45/2024/08/header_logo.svg"
                            alt="Fotograaf Logo"
                            className="img-fluid footer-logo mb-4"
                        />

                        <p className="footer-text mb-0">
                            Great photography is about conveying emotion,
                            <br />
                            not just what's in the frame. To me, photography
                            <br />
                            is an art of observation
                        </p>

                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">

                        <h4 className="footer-heading mb-4">
                            Contact Details
                        </h4>

                        <div className="d-flex align-items-center mb-3">

                            <span className="footer-icon d-flex align-items-center justify-content-center">
                                <FaPhoneAlt />
                            </span>

                            <span className="footer-text">
                                219 555-0114
                            </span>

                        </div>


                        <div className="d-flex align-items-center mb-3">

                            <span className="footer-icon d-flex align-items-center justify-content-center">
                                <FaEnvelope />
                            </span>

                            <span className="footer-text">
                                contact@fotograaf.com
                            </span>

                        </div>


                        <div className="d-flex align-items-center">

                            <span className="footer-icon d-flex align-items-center justify-content-center">
                                <FaMapMarkerAlt />
                            </span>

                            <span className="footer-text">
                                Royal 2464 Ln. Mesa, New Jersey
                            </span>

                        </div>

                    </div>

                    <div className="col-lg-4 col-md-12">

                        <h4 className="footer-heading mb-2">
                            Newsletter
                        </h4>

                        <p className="footer-text mb-4">
                            Get latest news, updates, tips &<br />
                            trics in your inbox.
                        </p>


                        <div className="input-group newsletter-box">

                            <input
                                type="email"
                                className="form-control"
                                placeholder="Input Your Email Here"
                            />

                            <button
                                className="btn newsletter-btn px-4"
                                type="button"
                            >
                                Send
                            </button>

                        </div>

                    </div>

                </div>

                <div className="footer-bottom py-3">

                    <div className="row align-items-center">


                        <div className="col-md-6 mb-3 mb-md-0">

                            <p className="copyright mb-0">
                                &copy; 2023 - 2026 DesignToCodes. All Right Reserved
                            </p>

                        </div>


                        <div className="col-md-6">

                            <div className="d-flex justify-content-md-end justify-content-start gap-2">

                                <a href="#" className="social-icon text-decoration-none d-flex align-items-center justify-content-center rounded-2">
                                    <FaFacebookF />
                                </a>

                                <a href="#" className="social-icon text-decoration-none d-flex align-items-center justify-content-center rounded-2">
                                    <FaTwitter />
                                </a>

                                <a href="#" className="social-icon text-decoration-none d-flex align-items-center justify-content-center rounded-2">
                                    <FaLinkedinIn />
                                </a>

                                <a href="#" className="social-icon text-decoration-none d-flex align-items-center justify-content-center rounded-2">
                                    <FaInstagram />
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <a
                href="#top"
                className="back-to-top d-flex align-items-center justify-content-center"
            >
                <FaArrowUp />
            </a>

        </footer>
    );
};

export default Footer;