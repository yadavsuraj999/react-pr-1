import Progarm from "./Progarm"
  let effective =   {
        heading:"EFFECTIVE MEMBERSHIP",
        para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type scrambled it to make a type specimen book."
}
const Bodyshap = () => {
    return (
        <section className="color text-secondary ">
            <div className="row me-0">
                <div className="col-xl-6 col-12 ">
                    <div className="d-flex justify-content-center align-items-center p-100">
                        <div>
                            <div>
                                <h2 className=" display-3 color-1 fw-semibold mb-5">
                                    THE PLACE TO <br /> GET BODY IN <br /> SHAPE.
                                </h2>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-12">
                                    <div className=" d-flex  align-items-center gap-2 mb-2">
                                        <div className="fs-4 color-1">
                                            01.
                                        </div>
                                        <div>
                                            <h3 className="m-0 fs-20 text-white">
                                                Running to Happiness
                                            </h3>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-5 text-secondary ">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-12">
                                    <div className=" d-flex  align-items-center gap-2 mb-2">
                                        <div className="fs-4 color-1">
                                            02.
                                        </div>
                                        <div>
                                            <h3 className="m-0 fs-20 text-white">
                                                Feminist Over Power
                                            </h3>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-5 text-secondary ">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-12">
                                    <div className=" d-flex  align-items-center gap-2 mb-2">
                                        <div className="fs-4 color-1">
                                            03.
                                        </div>
                                        <div>
                                            <h3 className="m-0 fs-20 text-white">
                                                Sport Happiness Fantasy
                                            </h3>
                                        </div>
                                    </div>
                                    <div>
                                        <p className=" text-secondary ">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-12">
                                    <div className=" d-flex  align-items-center gap-2 mb-2">
                                        <div className="fs-4 color-1">
                                            04.
                                        </div>
                                        <div>
                                            <h3 className="m-0 fs-20 text-white">
                                                Power Overwhelming
                                            </h3>
                                        </div>
                                    </div>
                                    <div>
                                        <p className=" text-secondary ">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-xl-6 col-12 ">
                    <div className="">
                        <img src="/images/infographic-6.jpg" alt="" width="100%" height="100%" />
                    </div>
                </div>
            </div>
            <Progarm effect={effective.heading} effectpara={effective.para}/>
        </section>
    )
}

export default Bodyshap