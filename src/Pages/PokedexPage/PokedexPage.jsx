import React from 'react'
import FooterItem from '../../component/FooterItem/FooterItem'
import HeaderItem from '../../component/HeaderItem/HeaderItem'
import PokedexContent from '../../component/PokedexContent/PokedexContent'

function PokedexPageContent() {
	return (
		<div className='wrapper'>
			<HeaderItem />
			<PokedexContent />
			<FooterItem position={false} />
		</div>
	)
}

export default PokedexPageContent