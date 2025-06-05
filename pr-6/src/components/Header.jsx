const Header = () => {
    return (
        <div className="bg-black">
            <div className="">
                <header>
                    <div className="d-flex justify-content-around align-items-center ">
                        <div>
                            <img src="https://srbthemes.kcubeinfotech.com/retro/retro/images/logo/logo_03_w.svg" alt="" />
                        </div>

                        <nav>
                            <ul className="d-flex m-0 fs-4 text-white">
                                <li>Home</li>
                                <li>Feature</li>
                                <li>Integration</li>
                                <li>Feedback</li>
                            </ul>
                        </nav>
                        <div className="d-flex align-items-center">
                            <div className="">
                                <img src="https://srbthemes.kcubeinfotech.com/retro/retro/images/icon/icon_01.svg" alt="" />
                            </div>
                            <h5 className="padding m-0 text-white cursor">
                                Login
                            </h5>
                            <div className="padding">
                                <button className="">
                                    Signup
                                </button>
                            </div>
                        </div>

                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header