import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Swipper = () => {
  const testimonials = [
    {
      image:
        "https://srbthemes.kcubeinfotech.com/retro/retro/images/media/img_04.jpg",
      quote: `"Highly recommend this reliable SaaS provider for seamless workflow optimization."`,
      name: "Stefan Jong",
      position: "Senior Officer, Arong",
      rating: 5,
      heading:"Incredible Work!"
    },
    {
      image:
        "https://srbthemes.kcubeinfotech.com/retro/retro/images/media/img_03.jpg",
      quote: `"The best chatbot platform we've used. Easy setup, instant results!"`,
      name: "Sara Lane",
      position: "Project Manager, DevUp",
      rating: 4.5,
      heading:"Awsome!"
    },
    {
      image:
        "https://srbthemes.kcubeinfotech.com/retro/retro/images/media/img_02.jpg",
      quote: `"Boosted customer engagement by 3x. Love the speed and precision!"`,
      name: "Michael Doe",
      position: "CMO, FastConnect",
      rating: 5,
      heading:"Very Solid!"
    },
  ];

  return (
    <section className="py-5">
      <div className="container mb-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-1 fw-bolder">130,000+</h1>
            <p className="fs-3">Customers love our product</p>
          </div>
          <div className="col-md-6 text-end">
            <img
              src="https://srbthemes.kcubeinfotech.com/retro/retro/images/assets/screen_23.png"
              alt="Illustration"
              className="img-fluid mb-3"
              style={{ maxWidth: "300px" }}
            />
            <p className="fs-4">
              Client satisfaction speaks louder than our words. Hear from them.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <Swiper
          spaceBetween={30}
          // slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 bg-light rounded py-5 px-4 shadow">
                <div className="d-flex align-items-center">
                  <div>
                    <img
                      src={item.image}
                      alt="Client"
                      className="img-fluid rounded mb-4"
                    />
                  </div>
                  <div>
                    <h4 className="fw-bold">{item.heading}</h4>
                    <p className="fs-4 fst-italic">
                      {item.quote}
                    </p>
                    <div className="d-flex align-items-center justify-content-between mt-4">
                      <div>
                        <h6 className="mb-1">{item.name}</h6>
                        <small className="text-muted">{item.position}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Swipper;
