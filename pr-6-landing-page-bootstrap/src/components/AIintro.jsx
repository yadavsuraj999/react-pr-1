const AIintro = () => {
  const features = [
    {
      icon: "https://srbthemes.kcubeinfotech.com/retro/retro/images/icon/icon_29.svg",
      title: "30x Faster Chatbot Response Time",
      bg: "bg-info",
    },
    {
      icon: "https://srbthemes.kcubeinfotech.com/retro/retro/images/icon/icon_29.svg",
      title: "Advanced AI Understanding",
      bg: "bg-warning",
    },
    {
      icon: "https://srbthemes.kcubeinfotech.com/retro/retro/images/icon/icon_29.svg",
      title: "24/7 Support and Availability",
      bg: "bg-success",
    },
  ];

  const Feature = ({ icon, title, bg }) => (
    <div className="col-md-4 col-12">
      <div className="d-flex align-items-center gap-3">
        <div className={`p-3 rounded-circle d-flex align-items-center justify-content-center ${bg}`}>
          <img src={icon} alt="Icon" style={{ width: "32px", height: "32px" }} />
        </div>
        <div>
          <h3 className="mb-0 text-white ">{title}</h3>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-ai">
      <div className="container py-5">
        <div className="row g-4">
          {features.map((item, index) => (
            <Feature key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIintro;
