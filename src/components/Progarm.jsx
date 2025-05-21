
     
 


//   let effective =   {
//         heading:"EFFECTIVE MEMBERSHIP",
//         para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type scrambled it to make a type specimen book."
// }



const Progarm = (props) => {
  return (
    <section className="bg-black">
        <div className="container">
            <div className="row p-110 align-items-center">
                <div className="col-lg-6 col-12 ">
                    <div>
                        <h2 className="display-5 main-heading fw-bold text-center w-75">
                            {props.heading} {props.fit} {props.about} {props.meet}
                        </h2>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div>
                        <p className=" text-secondary">
                            {props.head} {props.para} {props.aboutpara} {props.meetpara}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Progarm