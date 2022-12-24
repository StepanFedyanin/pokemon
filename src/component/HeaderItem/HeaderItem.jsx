import React from 'react'
import './HeaderItem.scss'
import logo from '../../resurc/logo.svg'
import { NavLink } from 'react-router-dom'
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
							<li className='header__list--item'>
								<NavLink to="/HomeContent" className={({ isActive }) => isActive ? "header__item--active" : "header__item--noactive"}>
									Home
								</NavLink>
							</li>
							<li className='header__list--item'>
								<NavLink to="/PokedexContent" className={({ isActive }) => isActive ? "header__item--active" : "header__item--noactive"}>
									Pokédex
								</NavLink>
							</li>
							<li className='header__list--item'>
								<NavLink to="/Varieties" className={({ isActive }) => isActive ? "header__item--active" : "header__item--noactive"}>
									Varieties
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default HeaderItem