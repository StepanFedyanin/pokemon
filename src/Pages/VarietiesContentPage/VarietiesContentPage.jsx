import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './VarietiesContent.scss'
import { GetPokiListVarieties } from '../../API/GetPokiListVarieties'
import FooterItem from '../../component/FooterItem/FooterItem'
import HeaderItem from '../../component/HeaderItem/HeaderItem'
import VarietiesContent from '../../component/VarietiesContent/VarietiesContent'
function VarietiesContentPage() {
	const dispath = useDispatch();
	useEffect(() => {
		dispath(GetPokiListVarieties())
	})
	return (
		<div className='VarietiesContentPage'>
			<HeaderItem />
			<VarietiesContent />
			<FooterItem position={true} color={true} />
		</div>
	)
}

export default VarietiesContentPage