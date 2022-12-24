import React from 'react'
import './FooterItem.scss'
function FooterItem({ position, color = false }) {
	return (
		<div className={position ? 'FooterItem position' : 'FooterItem'}>
			<div className="FooterItem__container">
				<div className='FooterItem__description'>
					<p className={color ? "FooterItem__description--white" : "FooterItem__description--style"}>Make with ❤️ for the PokéSpartans team Platzi Master</p>
				</div>
				<div className="FooterItem__description">
					<p className={color ? "FooterItem__description--white" : "FooterItem__description--style"}>Ours Team</p>
				</div>
			</div>
		</div>
	)
}

export default FooterItem