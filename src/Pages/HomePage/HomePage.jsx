import React from 'react'
import FooterItem from '../../component/FooterItem/FooterItem'
import HeaderItem from '../../component/HeaderItem/HeaderItem'
import HomeCover from '../../component/HomeCover/HomeCover'

function HomePage() {
	return (
		<div>
			<HeaderItem />
			<HomeCover />
			<FooterItem position={true} />
		</div>
	)
}

export default HomePage