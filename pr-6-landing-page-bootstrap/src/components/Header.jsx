const Header = () => {
  return (
    <div className="bg-ai border-bottom border-secondary position-sticky  z-3">
      <header className="container  py-3">
        <div className="row align-items-center justify-content-between">
          <div className="col-6 col-md-3 ms-md-4">
            <img
              src="https://srbthemes.kcubeinfotech.com/retro/retro/images/logo/logo_03_w.svg"
              alt="Logo"
              className="img-fluid"
            />
          </div>
          <div className="d-none d-xl-block col-md-5">
            <nav>
              <ul className="nav-hovers d-flex justify-content-around m-0 fs-5 text-white list-unstyled">
                <li>Home</li>
                <li>Feature</li>
                <li>Integration</li>
                <li>Feedback</li>
              </ul>
            </nav>
          </div>
          <div className="col-6 col-md-3 d-flex justify-content-end align-items-center">
            <img
              src="https://srbthemes.kcubeinfotech.com/retro/retro/images/icon/icon_01.svg"
              alt=""
              className="me-2 d-sm-flex d-none"
            />
            <h5 className="text-white m-0 me-3  cursor">Login</h5>
            {/* <button className="btn btn-outline-light btn-sm d-lg-flex d-none">Signup</button> */}
            <div>
              <button className="btn-color d-lg-none ms-3 px-3 py-1 rounded-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i class="bi bi-list text-white fs-3"></i></button>

              <div className="offcanvas offcanvas-start bg-secondary" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header border-bottom border-black">
                  <div className="">
                    <img
                      src="https://srbthemes.kcubeinfotech.com/retro/retro/images/logo/logo_03_w.svg"
                      alt="Logo"
                      className="img-fluid"
                    />
                  </div>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                   <nav>
                    <ul className="nav-hovers m-0 fs-5 lh-lg text-white list-unstyled">
                      <li>Home</li>
                      <li>Feature</li>
                      <li>Integration</li>
                      <li>Feedback</li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
