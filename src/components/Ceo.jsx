const Ceo = () => {

    let ceos=[
        {
            ceo:"/images/ceo1.jpg",
            heading:"SOMMER CHRISTIAN",
            para:"FOUNDER AND CEO"
        },
        {
            ceo:"/images/ceo2.jpg",
            heading:"PAUL SCRIVENS",
            para:"WOMEN'S FITNESS"
        },
        {
            ceo:"/images/ceo3.jpg",
            heading:"SHOKO MUGIKURA",
            para:"WOMEN'S BODYBUILDING"
        },
        {
            ceo:"/images/ceo4.jpg",
            heading:"JEREMY GIRARD",
            para:"MEN'S FITNESS"
        },
    ]
  return (
    <section className="bg-black pb-110">
        <div className="container">
            <div className="row">
                {ceos.map((items)=>{
                   return <div className="col-lg-3 col-md-6 col-12">
                    <div>
                        <div>
                            <img src={items.ceo} alt="" width="100%"/>
                        </div>
                        <div>
                            <p className="color-1 fw-semibold text-center pt-4 m-0">
                                {items.heading}
                            </p>
                            <p className="small text-secondary text-center border-bottom border-secondary pb-3">
                                {items.para}
                            </p>
                        </div>
                        <div className="d-flex gap-4 text-white justify-content-center pb-3 ceo">
                            <span><i class="bi bi-facebook"></i></span>
                            <span><i class="bi bi-twitter"></i></span>
                            <span><i class="bi bi-linkedin"></i></span>
                            <span><i class="bi bi-pinterest"></i></span>
                        </div>

                    </div>
                </div>
                })}
            </div>
        </div>
    </section>
  )
}

export default Ceo