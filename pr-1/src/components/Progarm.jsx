
     
 






const Progarm = (props) => {
  return (
    <section className="bg-black">
        <div className="container">
            <div className="row p-110 align-items-center">
                <div className="col-lg-6 col-12 ">
                    <div className="">
                        <h2 className="display-5 main-heading fw-bold w-75">
                            {props.heading} {props.fit} {props.about} {props.meet} {props.effect}
                        </h2>
                    </div>
                </div>
                <div className="col-lg-6 col-12 ">
                    <div>
                        <p className=" text-secondary">
                            {props.head} {props.para} {props.aboutpara} {props.meetpara} {props.effectpara}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Progarm