import React from 'react'
import Characteristics from '../Characteristics/Characteristics';
import Modifiers from '../Modifiers/Modifiers';
import './PokiCard.scss'
function PokiCard({ img, name, attack, defanse, descriptiont, setModalPoki, setModalPokiId }) {
	return (
		<div className='PokiCard' onClick={() => { setModalPoki(true); setModalPokiId(name) }}>
			<div className="PokiCard__info">
				<div className="PokiCard__name">
					<p className='PokiCard__name--text'>{name}</p>
				</div>
				<div className="PokiCard__characteristics">
					<Characteristics title="Attack" meaning={attack}/>
					<Characteristics title="Defanse" meaning={defanse}/>
				</div>
				<div className="poki__type">
					{
						descriptiont.map(desc =>
							<Modifiers key={name+desc.type.name} type__name={desc.type.name}/>
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