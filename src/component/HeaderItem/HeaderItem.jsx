import React from 'react'
import './HeaderItem.scss'
import logo from '../../resurc/logo.svg'
function HeaderItem() {
    return (
        <div className='header'>
            <div className="header__container">
                <div className="header__logo">
                    <img src={logo} alt="" />
                </div>
                <div className="header__content">
                    <nav className='header__nav'>
                        <ul className='header__nav--list'>
                            <li className='header__list--item'>Home</li>
                            <li className='header__list--item'>Pokédex</li>
                            <li className='header__list--item'>Legendaries</li>
                            <li className='header__list--item'>Documentation</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default HeaderItem