

function Header() {


    return (
        <header id="header" className="header fixed-top d-flex align-items-center">

            <div className="d-flex align-items-center justify-content-between">
                <a href="/home" className="logo d-flex align-items-center">
                    <img src="./images/logo-oncheck.png" alt="" />
                    <span className="d-none d-lg-block">GestStock</span>
                </a>
                <i className="bi bi-list toggle-sidebar-btn"></i>
            </div>

            <div className="search-bar">
                <form className="search-form d-flex align-items-center" method="POST" action="#">
                    <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                    <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                </form>
            </div>

            <nav className="header-nav ms-auto">
                <ul className="d-flex align-items-center">

                    <li className="nav-item d-block d-lg-none">
                        <a className="nav-link nav-icon search-bar-toggle " href="/">
                            <i className="bi bi-search"></i>
                        </a>
                    </li>

                    <li className="nav-item dropdown pe-3">

                        <a className="nav-link nav-profile d-flex align-items-center pe-0" href="/" data-bs-toggle="dropdown">
                            <img src="./images/<?= $user['logo'] ?>" alt="Profile" className="rounded-circle" />
                            <span className="d-none d-md-block dropdown-toggle ps-2"></span>
                        </a>

                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li className="dropdown-header">
                                <h6>Mon Profile</h6>
                                <span></span>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="profile.php">
                                    <i className="bi bi-person"></i>
                                    <span>Mon profile</span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="profile.php">
                                    <i className="bi bi-gear"></i>
                                    <span>Paramètres du compte</span>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>

                            <li>
                                <a className="dropdown-item d-flex align-items-center" href="deconnexion.php">
                                    <i className="bi bi-box-arrow-right"></i>
                                    <span>Déconnexion</span>
                                </a>
                            </li>

                        </ul>
                    </li>

                </ul>
            </nav>

        </header>
    )
}

export default Header;