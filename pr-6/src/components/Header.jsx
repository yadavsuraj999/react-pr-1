const Header = () => {
    return (
        <div className="bg-secondary">
            <div className="container">
                <header>
                    <div className="d-flex justify-content-between align-items-center ">
                        <h1 className="sitename">
                            <span>e</span>
                            Startup
                        </h1>

                        <nav>
                            <ul className="d-flex m-0">
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                        
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header