import Header from "./Header"


const Mainbanner = () => {
  return (
    <section>
      <Header/>
      <div className="main-img ">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div className="d-flex align-items-center hight">
                <div>
                  <h1 className="display-1 main-heading fw-bold">
                    CROSSFIT EXERCISES ON EVERY DAY.
                  </h1>
                  <button className="py-2 border-0 px-4 rounded-5 fw-medium d-flex gap-2 read-btn">READ MORE<i class="bi bi-chevron-right"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mainbanner