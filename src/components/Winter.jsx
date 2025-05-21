import Progarm from "./Progarm";
import Spa from "./Spa";

let abouts = {
    heading: "ABOUT THE FACILITY",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type scrambled it to make a type specimen book."
}

  let meet =  {
        heading:"MEET OUR TRAINERS",
        para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type scrambled it to make a type specimen book."
}

let spa = [
    {
        spaimg: "./images/agency-content-img01.jpg",
        spa1: "SPA & MASSAGE",
        spainfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
    },
    {
        spaimg: "./images/agency-content-img02.jpg",
        spa1: "CAFE & RESTAURANT",
        spainfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
    },
    {
        spaimg: "./images/agency-content-img03.jpg",
        spa1: "OUTDOOR SPORTS",
        spainfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
    },
]
const Winter = (props) => {
    return (
        <section className="">
            <div className="winter-img py-5 ">
                <div className="container">
                    <div className="py-5 m-5 position-relative z-1">
                        <h2 className="pt-5 display-3 fw-semibold text-center text-white">
                            WINTER SPECIAL OFFER <br />
                            GET 30% ON ALL PROGRAM
                        </h2>
                        <p className="text-center pt-4 fs-5 text-white">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text.
                        </p>
                        <div className=" d-flex justify-content-center align-items-center mt-5">
                            <button className="fs-6 fw-semibold py-2 px-3 rounded-5 border-0 bg-1 d-flex justify-content-center align-items-center btn-1  gap-2"   >
                                <span>JOIN PROGRAM</span> <span className="fw-bold"><i class="bi bi-arrow-right fw-bold fs-4"></i></span></button>
                        </div>
                    </div>
                </div>
            </div>
            <Progarm about={abouts.heading} aboutpara={abouts.para} />
            <section className="bg-black">
                <div className="container">
                    <div className="row">
                        {spa.map((item) => <Spa img={item.spaimg} head={item.spa1} para={item.spainfo} />)}
                    </div>
                </div>
            </section>
            <Progarm meet={meet.heading} meetpara={meet.para} />
            
        </section>
    )
}

export default Winter;