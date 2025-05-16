import Progarm from "./Progarm"

let fitness =   {
        heading:"THE FITNESS CLASSES",
        para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type scrambled it to make a type specimen book."
}

const Get_shap = () => {
  return (
    <section className="bg-1">
        <div className="row align-items-center">
            <div className="col-lg-6 col-12">
                <div>
                    <img src="./images/hero-01.jpg" alt="" width="100%" />
                </div>
            </div>
            <div className="col-lg-6 col-12">
                <div>
                    <h1 className="display-1 text-white fw-bold text-center">
                        THE PLACE <br /> TO GET IN <br /> SHAPE
                    </h1>
                    <p className=" fs-4  text-center">
                        For fitness and workout. we <br /> are available for 24/7 for your <br /> fitness.
                    </p>
                    <div className="d-flex justify-content-center mt-5">
                        <button className="py-2 text-white border-0 px-4 rounded-5 fw-medium d-flex gap-2 black-btn">MEET TRAINERS</button>
                    </div>
                </div>
            </div>
        </div>
        <Progarm fit={fitness.heading} para={fitness.para}/>
    </section>
  )
}

export default Get_shap