import React from 'react'
import { useDispatch } from 'react-redux';
import { changeCardId, changeModalLoading } from '../../redux/reducers/openModalReducer';
import Characteristics from '../Characteristics/Characteristics';
import Modifiers from '../Modifiers/Modifiers';
import './PokiCard.scss'
function PokiCard({ id_card, img, name, attack, defanse, descriptiont }) {
	const dispath = useDispatch();
	const showPokemon = () => {
		dispath(changeModalLoading(true));
		dispath(changeCardId(id_card));
	}
	// console.log(this.state);
	return (
		<div className='PokiCard' onClick={() => showPokemon()}>
			<div className="PokiCard__info">
				<div className="PokiCard__name">
					<p className='PokiCard__name--text'>{name}</p>
				</div>
				<div className="PokiCard__characteristics">
					<Characteristics title="Attack" meaning={attack} />
					<Characteristics title="Defanse" meaning={defanse} />
				</div>
				<div className="poki__type">
					{
						descriptiont.map(desc =>
							<Modifiers key={name + desc.type.name} type__name={desc.type.name} />
						)
					}
				</div>
			</div>
			<div className={'PokiCard__info__cover' + " " + descriptiont[0].type.name}>
				<img src={img} alt="cover" />
			</div>
		</div>
	)
}

export default PokiCard