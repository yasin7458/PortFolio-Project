const pricingPlans = [
    {
        name: "Minimal",
        price: "$100",
        duration: "1.5 Hour",
        photos: "25-30 Photo",
        ready: "2 Weeks",
        consultation: "Yes",
    },
    {
        name: "Standard",
        price: "$200",
        duration: "3 Hour",
        photos: "55-65 Photo",
        ready: "3 Weeks",
        consultation: "Yes",
    },
    {
        name: "Premium",
        price: "$300",
        duration: "5 Hour",
        photos: "100+",
        ready: "4 Weeks",
        consultation: "Yes",
    },
];

function Pricing() {
    return (
        <section className="py-5 bg-white">

            <div className="container">

                <div className="text-center mb-5">

                    <h2 className="fw-bold pricing-title mb-2">
                        SERVICES PRICES
                    </h2>

                    <p className="mx-auto mb-0 pricing-description">
                        Focus on what's important, capture the good times, develop
                        from the negatives and if things don't
                        <br />
                        work out, take another shot.
                    </p>

                </div>


                <div className="row g-4 justify-content-center cards">

                    {pricingPlans.map((plan) => (
                        <div
                            className="col-lg-4 col-md-6"
                        >
                            <div className="pricing-card bg-white p-4 text-center">

                                <h3 className="fw-semibold mb-1 pricing-name">
                                    {plan.name}
                                </h3>

                                <h4 className="fw-bold mb-2 pricing-price">
                                    {plan.price}
                                </h4>

                                <div className="mx-auto mb-4 text-center">
                                    <img
                                        src="/src/assets/divider.png"
                                        alt="Divider"
                                        className="img-fluid"
                                    />
                                </div>

                                <div className="text-start">

                                    <div className="d-flex justify-content-between border-bottom py-2">
                                        <span>Duration</span>
                                        <span>{plan.duration}</span>
                                    </div>

                                    <div className="d-flex justify-content-between border-bottom py-2">
                                        <span>Number Of Photos</span>
                                        <span>{plan.photos}</span>
                                    </div>

                                    <div className="d-flex justify-content-between border-bottom py-2">
                                        <span>Photo Ready</span>
                                        <span>{plan.ready}</span>
                                    </div>

                                    <div className="d-flex justify-content-between border-bottom py-2">
                                        <span>Consultation On Style</span>
                                        <span>{plan.consultation}</span>
                                    </div>

                                </div>
                                
                                <a
                                    href="#contact"
                                    className="btn pricing-btn fw-semibold mt-4 px-4 py-2"
                                >
                                    Let's Talk
                                </a>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Pricing;