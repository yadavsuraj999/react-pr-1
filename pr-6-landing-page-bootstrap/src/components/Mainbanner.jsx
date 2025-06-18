const Mainbanner = () => {
  return (
    <section className="bg-main border-bottom border-secondary position-relative top-0">
      <div className="container ">
        <div className="row align-items-center min-vh-100 ">
          {/* Left Column */}
          <div className="col-lg-6 col-12 mt-5 pe-5">
            <h1 className="display-1 fw-bold">
              Retro, Your AI Chatbot for your daily life
            </h1>
            <p className="fs-4 fw-semibold my-5">
              Retro chatbot delivers instant AI responses for 24/7 customer
              support & satisfaction.
            </p>
            <div className="row">
              <div className="col-md-8 col-12 mb-3 mb-md-0">
                <input
                  type="text"
                  placeholder="Email Address.."
                  className="input w-100 border-white"
                />
              </div>
              <div className="col-md-4 col-12 btn-1 ">
                <button className=" w-100 position-relative z-2">Try It Now</button>
              </div>
            </div>
            <ul className="p-0 d-flex gap-3 fs-5 mt-2">
              <li>
                <i className="bi bi-check2"></i> No Card required
              </li>
              <li>
                <i className="bi bi-check2"></i> 14 Days Free Trial
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 col-12 ps-5">
            <div className="img-wrapper ">
              <img
                src="https://srbthemes.kcubeinfotech.com/retro/retro/images/assets/man_01.png"
                alt="Main"
                className="main-img"
                />
              <div className="screen-img">
                <img
                  src="https://srbthemes.kcubeinfotech.com/retro/retro/images/assets/screen_16.png"
                  alt="Screen"
                  className="overlay-img"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
                  <div className="bg-brown d-lg-flex d-none"></div>
    </section>
  );
};

export default Mainbanner;
