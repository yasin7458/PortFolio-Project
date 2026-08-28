const testimonials = [
    {
        text: "I cannot overstate how grateful we are to have you spend the weekend with us. Your ability to make everyone feel comfortable and laugh is a true talent. Not to mention, you are an incredible photographer. We feel so lucky to have you in our lives!",
        name: "Laura K.",
        image: "./src/assets/client1.jpg",
    },
    {
        text: "Working with you was such a wonderful experience. You made everything feel effortless and comfortable, while capturing every little moment beautifully. We could not have asked for a better photographer and we are truly grateful for everything you did!",
        name: "Emily R.",
        image: "./src/assets/client2.jpg",
    }
];

function Slider() {
    return (
        <>
            <section className="client-feedback py-5">
                <div className="container">

                    <div className="feedback-heading">
                        <h2>CLIENT FEEDBACK</h2>
                    </div>

                    <div
                        id="clientFeedbackCarousel"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner">

                            {testimonials.map((item, index) => (
                                <div
                                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                                    data-bs-interval="4000"
                                >
                                    <div className="feedback-box d-flex overflow-hidden">

                                        <div className="feedback-content d-flex flex-column justy-content-center">
                                            <p>
                                                {item.text}
                                            </p>

                                            <h5>{item.name}</h5>
                                        </div>

                                        <div className="feedback-image">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="img-fluid"
                                            />
                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Slider;