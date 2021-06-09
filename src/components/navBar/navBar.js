import './style.css';
export const NavBar = () => {
    return (
        <nav className="nav">

            <div className="logo">
                <div className="logo__letter">
                    M
                </div>
                <p className="logo__name">Mueble Store</p>
            </div>

            <ul className='menu'>
                <li>
                    <a href="" className="menu__link">Productos</a>
                </li>

                <li>
                    <a href="" className="menu__link">Sobre Nosotros</a>
                </li>

                <li>
                    <a href="" className="menu__link">Contacto</a>
                </li>
            </ul>

        </nav>
    )

}