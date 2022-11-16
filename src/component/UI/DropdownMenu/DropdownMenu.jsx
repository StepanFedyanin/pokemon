import React, { useState } from 'react'
import './DropdownMenu.scss'
function DropdownMenu({ children, list }) {
	const [showDropdown, setShowDropdown] = useState(false)
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
				<ul>
					{
						list.map(item =>
							<li key={item}>
								<input type="checkbox" name="" id={item} />
								<label htmlFor={item}>{item}</label>
							</li>
						)
					}
				</ul>
			</nav>
		</div>
	)
}

export default DropdownMenu