

function Sidebar() {

    return (
        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-item">
                    <a className="nav-link " href="/home">
                        <i className="bi bi-grid"></i>
                        <span>Tableau de bord</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="/produits">
                    <i className="bi bi-card-list"></i>
                    <span>Produits</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="/entrees">
                    <i className="bi bi-card-list"></i>
                    <span>Gerer les entrees</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="/ventes">
                    <i className="bi bi-layout-text-window-reverse"></i>
                    <span>Gerer les ventes</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="/profile">
                    <i className="bi bi-person"></i>
                    <span>Profile</span>
                    </a>
                </li>

            </ul>

        </aside>
    )
}

export default Sidebar;