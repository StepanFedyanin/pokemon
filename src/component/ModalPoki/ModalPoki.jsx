import React, { useEffect, useState } from 'react'
import './ModalPoki.scss'
import closeIcon from '../../resurc/closeIcon.svg'
import PostPokiList from '../../API/GetPokiList';
import Modifiers from '../Modifiers/Modifiers';
import Characteristics from '../Characteristics/Characteristics';
function ModalPoki({ modalPoki, setModalPoki, modalPokiId }) {
	const [pokiContent, setPokiContent] = useState();
	const [pokiAwaitLoading, setAwaitLoading] = useState(false);

	const style = ['ModalPoki'];
	if (modalPoki) {
		style.push('active');
	}
	useEffect(() => {
		awaitPoki();
	}, [modalPokiId])
	const awaitPoki = async () => {
		const responce = await PostPokiList.getPokiName(modalPokiId);
		setPokiContent(await responce);
		console.log(await responce);
		setAwaitLoading(true)
	}
	return (
		<div className={style.join(' ')} onClick={() => setModalPoki(false)}>
			<div className="ModalPoki__container" onClick={(e) => e.stopPropagation()}>
				<div className="ModalPoki__hide">
					<button onClick={() => setModalPoki(false)}>
						<img src={closeIcon} alt="" />
					</button>
				</div>
				<div className={"ModalPoki__container--content"}>
					{
						pokiAwaitLoading ?
							<div className={'ModalPoki__content' + " " + pokiContent.types[0].type.name}>
								<div className="ModalPoki__content--cover">
									<div className="ModalPoki__cover--photo">
										<img src={pokiContent.sprites.other.home.front_default} alt="" />
									</div>
									<div className="odalPoki__cover--modifiers">
										{
											pokiContent.types.map(desc =>
												<Modifiers key={modalPokiId+"-"+desc.type.name} type__name={desc.type.name} />
											)
										}									
									</div>
								</div>
								<div className="ModalPoki__content--description">
									<div className="ModalPoki__description--info">
										<div className="ModalPoki__info--name">
											<p>{pokiContent.name}</p>
										</div>
										<div className="ModalPoki__info--generation">
											<div className="ModalPoki__generation--number">
												<p></p>
											</div>
											<div className="ModalPoki__generation--meaning">
												<p>
												</p>
											</div>
										</div>
									</div>
									<div className="ModalPoki__description--abilities">
										<div className="ModalPoki__abilities--title">
											<p></p>
										</div>
										<div className="ModalPoki__abilities--meaning">
											<p></p>
										</div>
									</div>
									<div className="ModalPoki__description--lvl">
										<div className="ModalPoki__lvl--item">
											<div className="ModalPoki__item--title"></div>
											<div className="ModalPoki__item--meaning">
												<p>{pokiContent.stats[2].base_stat}</p>
											</div>
											<div className="ModalPoki__item--progress">
											</div>
										</div>
										<div className="ModalPoki__lvl--item">
											<div className="ModalPoki__item--title"></div>
											<div className="ModalPoki__item--meaning">
												<p>{pokiContent.base_experience}</p>
											</div>
											<div className="ModalPoki__item--progress">
											</div>
										</div>
									</div>
									<div className="ModalPoki__description--characteristics">
										<div className="ModalPoki__characteristics--item">
										<Characteristics title="Defanse" meaning={pokiContent.stats[2].base_stat}/>
										</div>
										<div className="ModalPoki__characteristics--item">
										<Characteristics title="Attack" meaning={pokiContent.stats[1].base_stat}/>
										</div>
										<div className="ModalPoki__characteristics--item">
										<Characteristics title="Sp Attack" meaning={pokiContent.stats[3].base_stat}/>
										</div>
										<div className="ModalPoki__characteristics--item">
										<Characteristics title="Sp Defense" meaning={pokiContent.stats[4].base_stat}/>
										</div>

									</div>
								</div>
							</div>
							:
							<div className=""></div>
					}

				</div>
			</div>
		</div >
	)
}

export default ModalPoki