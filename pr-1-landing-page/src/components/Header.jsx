const Header = () => {
    return (
        <header className=" d-flex bg-black border-bottom border-secondary z-3 position-sticky top-0">
            <div className="container">
                <nav className="d-flex justify-content-between align-items-center nav-bar">
                    <div className="">
                        <img src="/public/images/logo.png" alt="" width="80%" />
                    </div>
                    <ul className="d-lg-flex d-none gap-4 text-white m-0 nav-menu">
                        <li>ABOUT</li>
                        <li>PROGRAMS</li>
                        <li>CLASSES</li>
                        <li>FACILITY</li>
                        <li>TRAINERS</li>
                        <li>PRICING</li>
                        <li>CONTACT</li>
                    </ul>

                </nav>
            </div>
            <button className="btn d-lg-none d-block " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><span className="fs-3 text-white"><i className="bi bi-list"></i></span></button>

            <div className="offcanvas offcanvas-end bg-1" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">
                        <img src="/images/logo.png" alt="" />
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul className=" text-white m-0 lh-lg next-nav fw-semibold">
                        <li>ABOUT</li>
                        <li>PROGRAMS</li>
                        <li>CLASSES</li>
                        <li>FACILITY</li>
                        <li>TRAINERS</li>
                        <li>PRICING</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;