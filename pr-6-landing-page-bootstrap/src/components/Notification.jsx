const Notification = () => {
  const notify = [
    {
      img: "https://srbthemes.kcubeinfotech.com/retro/retro/images/assets/screen_20.png",
      title: "FASTEST AI CHATBOT",
      heading: "Accurate, fast & source backed responses",
      para:
        "Business-ready chatbot responses backed by file & webpage sources, designed with anti-hallucination features to prevent irrelevant answers.",
    },
    {
      img: "https://srbthemes.kcubeinfotech.com/retro/retro/images/assets/screen_21.png",
      title: "NOTIFICATION",
      heading: "Get AI conversation updates Daily.",
      para:
        "Every day, your AI chatbot reports its key conversation topics and newly acquired leads, ensuring you stay updated and informed on business opportunities.",
    },
    {
      img: "https://srbthemes.kcubeinfotech.com/retro/retro/images/assets/screen_22.png",
      title: "QUALITY CONTENT",
      heading: "Create Better Content 10x Faster with AI Writer",
      para:
        "Automate repetitive support tasks and focus human effort where it matters. Scalable to support growing user demand.",
    },
  ];

  return (
    <section className="bg-ai  pt-180">
      <div className="container">
        {notify.map((item, index) => (
          <div
            className="row align-items-center pb-5"
            key={index}
          >
            {/* Alternate image and content placement for visual variation */}
            <div className={`col-lg-6 ${index % 2 === 0 ? "" : "order-lg-2"}`}>
              <div className="img-blur">
                <img
                  src={item.img}
                  alt={item.heading}
                  className="img-fluid"
                />
              </div>
            </div>

            <div className={`col-lg-6 ${index % 2 === 0 ? "" : "order-lg-1"}`}>
              <div>
                <div className="fw-semibold fs-5 mb-3 text-secondary text-uppercase">
                  {item.title}
                </div>
                <h2 className="display-5 fw-bolder mb-4 text-white">
                  {item.heading}
                </h2>
                <p className="fs-5 text-secondary">
                  {item.para}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Notification;
