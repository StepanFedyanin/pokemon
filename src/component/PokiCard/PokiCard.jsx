import React from 'react'
import './PokiCard.scss'
function PokiCard({ img, name, attack, defanse, descriptiont, setModalPoki, setModalPokiId }) {
	return (
		<div className='PokiCard' onClick={() => { setModalPoki(true); setModalPokiId(name) }}>
			<div className="PokiCard__info">
				<div className="PokiCard__name">
					<p className='PokiCard__name--text'>{name}</p>
				</div>
				<div className="PokiCard__characteristics">
					<div className="PokiCard__characteristics--item">
						<div className="PokiCard__characteristics--meaning">
							<p>{attack}</p>
						</div>
						<div className="PokiCard__characteristics--name">
							<p className='PokiCard__name--text'>Attack</p>
						</div>
					</div>
					<div className="PokiCard__characteristics--item">
						<div className="PokiCard__characteristics--meaning">
							<p className='PokiCard__meaning--text'>{defanse}</p>
						</div>
						<div className="PokiCard__characteristics--name">
							<p className='PokiCard__name--text'>Defanse</p>
						</div>
					</div>
				</div>
				<div className="poki__type">
					{
						descriptiont.map(desc =>
							<div key={name + desc.type.name} className={'poki__type--item' + " " + desc.type.name}>
								<p className='poki__type--text'>{desc.type.name}</p>
							</div>
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