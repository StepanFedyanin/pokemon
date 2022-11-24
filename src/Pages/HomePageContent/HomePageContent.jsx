import React from 'react'
import FooterItem from '../../component/FooterItem/FooterItem'
import HeaderItem from '../../component/HeaderItem/HeaderItem'
import HomeContent from '../../component/HomeContent/HomeContent'

function HomePageContent() {
	return (
		<div className='wrapper'>
			<HeaderItem />
			<HomeContent />
			<FooterItem position={false} />
		</div>
	)
}

export default HomePageContent