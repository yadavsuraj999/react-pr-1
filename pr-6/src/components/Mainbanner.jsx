const Mainbanner = () => {
    return (
        <section>
            <div className="container">
                <div className="row vh-100 align-items-center">
                    <div className="col-6">
                        <h1 className="display-1 fw-bold">
                            Retro, Your AI Chatbot for your daily life
                        </h1>
                        <p className="fs-4 fw-semibold my-5">
                            Retro chatbot delivers instant AI responses for 24/7 customer support & satisfaction.
                        </p>
                        <div className="d-flex gap-3">
                            <input type="text" placeholder="Email Address.." className="input" />
                            <button className="btn-1">Try It Now</button>
                        </div>
                        <ul class="p-0 d-flex gap-3 fs-5 mt-2">
                            <li><i class="bi bi-check2"></i> No Card required</li>
                            <li><i class="bi bi-check2"></i> 14 Days Free Trial</li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <div className="position-relative">
                            <img src="https://srbthemes.kcubeinfotech.com/retro/retro/images/assets/man_01.png" alt="" width="100%" />
                        <div className="position-absolute pos-img">
                            <img src="https://srbthemes.kcubeinfotech.com/retro/retro/images/assets/screen_16.png" alt="" width="100%"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mainbanner