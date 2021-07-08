import React from 'react'
import {CartWidget} from "../cartWidget/cartWidget";
import './navbar.css';
import {Link, NavLink} from 'react-router-dom'
export const NavBar = ({store}) => {

    const categories = ['Madera Rustica', 'Mueble Moderno', 'Contacto']


    return (
        <nav className="nav">

            <Link to='/'>
                <div className="logo">
                    <div className="logo__letter">
                        M
                    </div>
                    <p className="logo__name">Mueble Store</p>
                </div>
            </Link>

            <div className="menu-contenedor">

            <ul className='menu'>

                {
                    categories.map((category) => (
                            <NavLink to={ `/category/${category}`}>
                                <li>
                                     <p className="menu__link">{category}</p>
                                </li>
                            </NavLink>
                        )
                    )
                }

{/*
                <NavLink to='/category/Productos'>
                    <li>
                        <p className="menu__link">Productos</p>
                    </li>
                </NavLink>

                <NavLink to='/category/nosotros'>
                    <li>
                        <p className="menu__link">Sobre Nosotros</p>
                    </li>
                </NavLink>

                <NavLink to='/category/contacto'>
                    <li>
                        <p className="menu__link">Contacto</p>
                    </li>
                </NavLink>*/}
            </ul>

                <CartWidget />

            </div>

        </nav>
    )

}