import { FaPhoneAlt } from "react-icons/fa";

function Header() {
    return (
        <header className="bg-white position-relative z-3">
            <nav className="navbar navbar-expand-lg bg-white py-2 border-bottom">
                <div className="container">

                    <a href="/" className="navbar-brand p-0">
                        <img
                            src="https://wp.designtocodes.com/Fotograaf_V2/wp-content/uploads/sites/45/2024/08/header_logo.svg"
                            alt="Logo"
                            width="90"
                            className="d-block"
                        />
                    </a>

                    <button
                        className="navbar-toggler border-0 shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar"
                        aria-controls="mainNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse justify-content-center"
                        id="mainNavbar"
                    >
                        <ul className="navbar-nav align-items-lg-center gap-lg-3">

                            <li className="nav-item">
                                <a
                                    className="nav-link active fw-bold"
                                    href="#home"
                                >
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link fw-bold"
                                    href="#about"
                                >
                                    About
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link fw-bold"
                                    href="#services"
                                >
                                    Services
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link fw-bold"
                                    href="#portfolio"
                                >
                                    Portfolio
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link fw-bold"
                                    href="#awards"
                                >
                                    Awards
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link fw-bold"
                                    href="#contact"
                                >
                                    Contact
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* Phone */}
                    <div className="d-none d-lg-block">
                        <a
                            href="tel:+12195550114"
                            className="phone-link text-decoration-none fw-bold d-flex align-items-center"
                        >
                            <span className="phone-icon d-flex align-items-center justify-content-center rounded-1">
                                <FaPhoneAlt />
                            </span><span>219 555-0114</span>
                        </a>
                    </div>

                </div>
            </nav>
        </header>
    );
}

export default Header;