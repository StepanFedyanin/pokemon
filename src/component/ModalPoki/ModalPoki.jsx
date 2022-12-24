import React, { useEffect, useRef, useState } from 'react'
import './ModalPoki.scss'
import closeIcon from '../../resurc/closeIcon.svg'
import PostPokiList, { getPokiList } from '../../API/GetPokiList';
import Modifiers from '../Modifiers/Modifiers';
import Characteristics from '../Characteristics/Characteristics';
import ProgressBar from '../UI/ProgressBar/ProgressBar';
import { useDispatch, useSelector } from 'react-redux';
import { changeModalLoading, modalLoadingContent } from '../../redux/reducers/openModalReducer';
import { getPokiName } from '../../API/GetPokiInfo';
function ModalPoki() {
	const dispath = useDispatch();
	const loadingModal = useSelector(state => state.openModal.loadingModal)
	const idCard = useSelector(state => state.openModal.id_Card)
	const pokiContent = useSelector(state => state.openModal.pokemon_content)
	const loadingModalContent = useSelector(state => state.openModal.loadingModalContent)
	const progressBarHealthy = useRef('*');
	const progressBarExperience = useRef('*');

	const style = ['ModalPoki'];
	if (loadingModal) {
		style.push('active');
	}
	useEffect(() => {
		dispath(getPokiName(idCard))
		// progressBar();
	}, [idCard])
	useEffect(() => {
		document.addEventListener('keydown', (e) => {
			if (e.keyCode == 27) {
				dispath(changeModalLoading(false))
			}
		})
	}, [loadingModal])
	return (
		<div className={style.join(' ')} onClick={() => {
			dispath(changeModalLoading(false));
			dispath(modalLoadingContent(false));
		}}>
			<div className="ModalPoki__container" onClick={(e) => e.stopPropagation()}>
				<div className="ModalPoki__hide">
					<button className='ModalPoki__hide--btn' onClick={() => {
						dispath(changeModalLoading(false));
						dispath(modalLoadingContent(false));
					}}>
						<img src={closeIcon} alt="" />
					</button>
				</div>
				<div className={"ModalPoki__container--content"}>
					{
						loadingModalContent ?
							<div className={'ModalPoki__content' + " " + pokiContent.types[0].type.name}>
								<div className="ModalPoki__content--cover">
									<div className="ModalPoki__cover--photo">
										<img src={pokiContent.sprites.other.home.front_default} alt="" />
									</div>
									<div className="ModalPoki__cover--modifiers">
										{
											pokiContent.types.map(desc =>
												<Modifiers key={idCard + "-" + desc.type.name} type__name={desc.type.name} />
											)
										}
									</div>
								</div>
								<div className={"ModalPoki__content--description" + ' ' + pokiContent.types[0].type.name}>
									<div className="ModalPoki__description--info">
										<div className="ModalPoki__info--name">
											<p className='ModalPoki__name--style'>{pokiContent.name}</p>
										</div>
										<div className="ModalPoki__info--generation">
											<div className="ModalPoki__generation--number">
												<p className='ModalPoki__generation--info'>Generation 1</p>
											</div>
											<div className="ModalPoki__generation--meaning">
												<p className='ModalPoki__meaning--id'>{pokiContent.id}</p>
											</div>
										</div>
									</div>
									<div className="ModalPoki__description--abilities">
										<div className="ModalPoki__abilities--title">
											<p className='ModalPoki__abilities--text'>Abilities</p>
										</div>
										<div className="ModalPoki__abilities--meaning">
											<p className='ModalPoki__abilities--dec'>
												{
													pokiContent.abilities.map(abi => { return (abi.ability.name + " - ") })
												}
											</p>
										</div>
									</div>
									<div className="ModalPoki__description--lvl">
										<div className="ModalPoki__lvl--item">
											<ProgressBar title='healthy' styleName='green' percent={pokiContent.stats[2].base_stat} />
										</div>
										<div className="ModalPoki__lvl--item">
											<ProgressBar title='experience' styleName='gold' percent={pokiContent.base_experience} />
										</div>
									</div>
									<div className="ModalPoki__description--characteristics">
										<div className="ModalPoki__characteristics--item">
											<Characteristics title="Defanse" meaning={pokiContent.stats[2].base_stat} />
										</div>
										<div className="ModalPoki__characteristics--item">
											<Characteristics title="Attack" meaning={pokiContent.stats[1].base_stat} />
										</div>
										<div className="ModalPoki__characteristics--item">
											<Characteristics title="Sp Attack" meaning={pokiContent.stats[3].base_stat} />
										</div>
										<div className="ModalPoki__characteristics--item">
											<Characteristics title="Sp Defense" meaning={pokiContent.stats[4].base_stat} />
										</div>

									</div>
								</div>
							</div>
							:
							null
					}

				</div>
			</div>
		</div >
	)
}

export default ModalPoki