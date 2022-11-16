import React from 'react'
import './Serch.scss'
function Serch({ placeholder }) {
	return (
		<input className='serch' type="text" placeholder={placeholder} />
	)
}

export default Serch