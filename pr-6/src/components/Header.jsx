const Header = () => {
  return (
    <div className="bg-black">
      <header className="container py-3">
        <div className="row align-items-center justify-content-between">
          {/* Logo */}
          <div className="col-6 col-md-3 ms-md-4">
            <img
              src="https://srbthemes.kcubeinfotech.com/retro/retro/images/logo/logo_03_w.svg"
              alt="Logo"
              className="img-fluid"
            />
          </div>

          {/* Nav links */}
          <div className="d-none d-xl-block col-md-5">
            <nav>
              <ul className="d-flex justify-content-around m-0 fs-5 text-white list-unstyled">
                <li>Home</li>
                <li>Feature</li>
                <li>Integration</li>
                <li>Feedback</li>
              </ul>
            </nav>
          </div>

          {/* Auth buttons */}
          <div className="col-6 col-md-3 d-flex justify-content-end align-items-center">
            <img
              src="https://srbthemes.kcubeinfotech.com/retro/retro/images/icon/icon_01.svg"
              alt=""
              className="me-2"
            />
            <h5 className="text-white m-0 me-3 cursor">Login</h5>
            <button className="btn btn-outline-light btn-sm">Signup</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
