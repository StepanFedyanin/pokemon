import React, { useEffect, useRef } from 'react'
import './Serch.scss'
import serchIcon from '../../../resurc/serchIcon.png'
import { getPokiName } from '../../../API/GetPokiInfo'
import { useDispatch } from 'react-redux';
import { changeModalLoading } from '../../../redux/reducers/openModalReducer';
function Serch({ placeholder }) {
	const dispath = useDispatch();
	const inputSerch = useRef('*')
	const showSerchContent = (keyCode = 13) => {
		if (keyCode == 13 && inputSerch.current.value != '') {
			console.log(keyCode);
			dispath(changeModalLoading(true));
			dispath(getPokiName(inputSerch.current.value))
		}
	}

	return (
		<div className="serch">
			<div className="serch__input">
				<input className='serch__input--style' type="text" placeholder={placeholder} ref={inputSerch} onKeyDown={(e) => showSerchContent(e.keyCode)} />
			</div>
			<div className="serch__btn">
				<button onClick={() => showSerchContent()}>
					<img src={serchIcon} alt="" />
				</button>
			</div>
		</div>

	)
}

export default Serch