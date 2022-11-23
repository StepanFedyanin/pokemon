import React, { useEffect, useRef, useState } from 'react'
import './DropdownMenu.scss'
function DropdownMenu({ children, list }) {
	const [showDropdown, setShowDropdown] = useState(false);
	return (
		<div className='dropdown'>
			<div className="dropdown__btn">
				<button
					className='dropdown__btn--style'
					onClick={() => showDropdown ? setShowDropdown(false) : setShowDropdown(true)}
				>
					{children}
				</button>
			</div>

			<nav className={showDropdown ? 'dropdown__list--Show' : 'dropdown__list'}>
				<ul className='dropdown__list--nav'>
					{/* {
						list.map(item =>
							<li key={item} className="dropdown__list--item">
								<input className="dropdown__item--input" type="checkbox" name="" id={item} />
								<label className="dropdown__item--label" htmlFor={item}>{item}</label>
							</li>
						)
					} */}
				</ul>
			</nav>
		</div>
	)
}

export default DropdownMenu