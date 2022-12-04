import React, { useEffect, useState } from 'react'
import PostPokiList from '../../API/GetPokiList'
import Loading from '../Loading/Loading';
import PokiCard from '../PokiCard/PokiCard'
import './PokiList.scss'
function PokiList({ pokiList }) {
	return (
		<div className='HomeContent__list'>
			{
				pokiList.map(poki =>
					<PokiCard
						key={poki.name}
						img={poki.sprites.other.home.front_default}
						name={poki.name}
						attack={poki.stats[4].base_stat}
						defanse={poki.stats[3].base_stat}
						descriptiont={poki.types}
					/>
				)
			}
		</div>
	)
}

export default PokiList