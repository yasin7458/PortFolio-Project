const portfolioImages = [
    {
        src: "/src/assets/portfolio1.png",
        alt: "Portfolio 1",
        className: "portfolio-item item-1"
    },
    {
        src: "/src/assets/portfolio2.png",
        alt: "Portfolio 2",
        className: "portfolio-item item-2"
    },
    {
        src: "/src/assets/portfolio3.png",
        alt: "Portfolio 3",
        className: "portfolio-item item-3"
    },
    {
        src: "/src/assets/portfolio4.png",
        alt: "Portfolio 4",
        className: "portfolio-item item-4"
    },
    {
        src: "/src/assets/portfolio5.png",
        alt: "Portfolio 5",
        className: "portfolio-item item-5"
    },
    {
        src: "/src/assets/portfolio6.png",
        alt: "Portfolio 6",
        className: "portfolio-item item-6"
    }
];

function Portfolio() {
    return (
        <section id="portfolio" className="py-5 bg-white">

            <div className="container">
                <div className="text-center mb-4">

                    <h2 className="fw-bold portfolio-title mb-2">
                        PORTFOLIO
                    </h2>

                    <p className="mb-0 portfolio-description py-3">
                        As a photographer, I try to tell a story through pictures.
                        A single tear can contain an entire ocean.
                        <br />
                        A photographer is aware of the tiny moments in a person's
                        life that reveal greater truths.
                    </p>

                </div>
            </div>

            <div className="container-fluid">

                <div className="portfolio-grid">

                    {portfolioImages.map((image) => (
                        <div
                            className={`${image.className} overflow-hidden position-relative`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-100 h-100 d-block portfolio-img"
                            />
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Portfolio;