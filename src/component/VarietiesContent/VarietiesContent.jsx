import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { ChangeVarietiesContent } from '../../redux/reducers/varietiesContent';
import ChoiceSlider from '../ChoiceSlider/ChoiceSlider'
import ProgressBar from '../UI/ProgressBar/ProgressBar';
import './VarietiesContent.scss'
function VarietiesContent() {
	const dispatch = useDispatch();
	const pokiList = useSelector(state => state.varieties.normal);
	const varietiesContent = useSelector(state => state.varietiesContent);
	// console.log(pokiList[0]);
	useEffect(() => {
		// dispatch(ChangeVarietiesContent(pokiList[0]))
	}, [])
	return (
		<div className='VarietiesContent'>
			<div className="VarietiesContent__container">
				<div className="VarietiesContent__content">
					<div className="VarietiesContent__content--cover">
						<img src={varietiesContent.sprites} alt="" />
					</div>
					<div className="VarietiesContent__content--description">
						<div className="VarietiesContent__description--name">
							<p className='VarietiesContent__name--style'>{varietiesContent.name}</p>
						</div>
						<div className="VarietiesContent__description--progress">
							{
								varietiesContent.stats.map(item =>
									<div className="VarietiesContent__progress--item">
										<ProgressBar bg="true" title={item.stat.name} styleName='gold' percent={item.base_stat} />
									</div>
								)
							}
						</div>
					</div>
				</div>
				<ChoiceSlider typeList={pokiList} />
			</div>
		</div>
	)
}

export default VarietiesContent