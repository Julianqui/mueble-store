import React from 'react'
import {CartWidget} from "../cartWidget/cartWidget";
import './style.css';
export const NavBar = ({store, onClick, children}) => {
    return (
        <nav className="nav">

            <div className="logo">
                <div className="logo__letter">
                    M
                </div>
                <p className="logo__name">{store}</p>
            </div>

            <ul className='menu'>
                <li>
                    <p className="menu__link">Productos</p>
                </li>

                <li>
                    <p className="menu__link">Sobre Nosotros</p>
                </li>

                <li>
                    <p className="menu__link">Contacto</p>
                </li>
            </ul>

            <div>
                <button onClick={onClick}>
                    Apretame
                </button>

            </div>

            <div>{children}</div>

            <CartWidget />

        </nav>
    )

}