const Footer = () => {
    return (
        <section className="bg-black">
            <div className="container">
                <div className="p-110">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="text-center">
                                <div className="fs-2 color-1">
                                    <i class="bi bi-geo-alt"></i>
                                </div>
                                <h6 className="text-white">
                                    Contact Address
                                </h6>
                                <p className="minus text-secondary">
                                    301 The Greenhouse, Custard,
                                    Factory, London, E2 8DY.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="text-center">
                                <div className="fs-2 color-1">
                                    <i class="bi bi-phone"></i>
                                </div>
                                <h6 className="text-white">
                                    Call Us Today!
                                </h6>
                                <p className="minus text-secondary">
                                    (M) +44 (0) 123 456 7890 <br />
                                    (O) +44 (0) 123 456 7890
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="text-center">
                                <div className="fs-2 color-1">
                                    <i class="bi bi-envelope"></i>
                                </div>
                                <h6 className="text-white">
                                    Email
                                </h6>
                                <p className="minus text-secondary">
                                    no-reply@domain.com <br />
                                    help@domain.com
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="text-center">
                                <div className="fs-2 color-1">
                                    <i class="bi bi-clock"></i>
                                </div>
                                <h6 className="text-white">
                                    Working Hours
                                </h6>
                                <p className="minus text-secondary">
                                    Mon to Sat - 9 AM to 11 PM <br />
                                    Sunday 10 AM to 6 PM
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className=" border-top border-secondary py-4">
                <div className="container">
                    <div className="row gy-4 align-items-center">
                        <div className="col-sm-6 col-12">
                            <div className="">
                                <img src="/images/logo.png" alt="" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-12">
                            <div className=" d-flex align-items-center justify-content-end">
                                <p className="m-0 text-secondary">
                                    © 2016 LeadGen is proudly powered by ThemeZaa.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer