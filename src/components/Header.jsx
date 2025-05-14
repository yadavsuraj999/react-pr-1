const Header = () => {
    return (
        <header className=" d-flex bg-black border-bottom border-secondary z-1 position-sticky top-0">
            <div className="container">
                <nav className="d-flex justify-content-between align-items-center nav-bar">
                    <div>
                        <img src="/public/images/logo.png" alt="" width="80%"/>
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
                        <span className="d-lg-none d-block fs-3 text-white"><i class="bi bi-list"></i></span>
                </nav>
            </div>
        </header>
    )
}

export default Header;