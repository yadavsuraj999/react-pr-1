const Chatbot = () => {
  return (
    <section className="position-relative overflow-hidden bg-ai">
      <div className="bg-chat"></div> {/* Background moved to top inside section */}

      <div className="container py-5 position-relative">
        <div className="text-center">
          <h2 className="display-4 fw-bolder text-white">
            Help, convert, & sell with a data <br /> driven AI chatbot
          </h2>
          <p className="fs-3 fw-semibold my-4 text-white">
            Boost sales & conversions with a data-powered AI chatbot solution
          </p>
          <img
            src="https://srbthemes.kcubeinfotech.com/retro/retro/images/assets/screen_17.png"
            alt="Chatbot"
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
