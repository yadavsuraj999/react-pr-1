let classs = [
  {
    image: "./images/spa-img-01.jpg",
    head: "CARDIO CLASSES",
    info: "Lorem Ipsum is simply text dummy text of the printing and typesetting industry. an Lorem Ipsum has been.",
    time: "12:00 AM – 14:00 AM",
  },
  {
    image: "./images/spa-img-02.jpg",
    head: "SCULPTURING CLASSES",
    info: "Lorem Ipsum is simply text dummy text of the printing and typesetting industry. an Lorem Ipsum has been.",
    time: "06:00 AM – 09:30 AM",
  },
  {
    image: "./images/spa-img-03.jpg",
    head: "FITNESS CLASSES",
    info: "Lorem Ipsum is simply text dummy text of the printing and typesetting industry. an Lorem Ipsum has been.",
    time: "08:00 AM – 10:00 AM",
  },
  {
    image: "./images/spa-img-04.jpg",
    head: "WEIGHT REDUCING",
    info: "Lorem Ipsum is simply text dummy text of the printing and typesetting industry. an Lorem Ipsum has been.",
    time: "07:00 AM – 11:00 AM",
  },
];

const Classes2 = () => {
  return (
    <section className=" bg-black pb-110">
      <div className="container">
        <div className="row gy-4">
          {classs.map((item) => {
            return (
              <div className="col-lg-6 col-12">
                <div className="color">
                  <div className="row">
                    <div className="col-md-7  col-12">
                      <div className="fit">
                        <img src={item.image} alt="" />
                      </div>
                    </div>
                    <div className="col-md-5 col-12 p-0 ">
                      <div className="py-5 my-5 px-4 ">
                        <h6 className="color-1">{item.head}</h6>
                        <p className=" text-secondary ">
                          {item.info}
                        </p>
                        <span className=" text-secondary">
                          {item.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Classes2;
