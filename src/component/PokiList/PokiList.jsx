import React, { useEffect, useState } from 'react'
import PostPokiList from '../../API/GetPokiList'
import Loading from '../Loading/Loading';
import PokiCard from '../PokiCard/PokiCard'
import './PokiList.scss'
function PokiList({ pagination, setModalPoki, setModalPokiId }) {
	const [pokiList, setPokiList] = useState([]);
	const [LoadingBoolean, setLoadingBoolean] = useState(false);

	const getServise = async () => {
		const get = await PostPokiList.getAll(9, pagination)
		setPokiList(get);
		setLoadingBoolean(true)
	}
	useEffect(() => {
		getServise();
	}, [pagination])
	return (
		<div className='HomeContent__list'>
			{LoadingBoolean ?
				pokiList.map(poki =>
					<PokiCard
						key={poki.name}
						img={poki.sprites.other.home.front_default}
						name={poki.name}
						attack={poki.stats[4].base_stat}
						defanse={poki.stats[3].base_stat}
						descriptiont={poki.types}
						setModalPoki={setModalPoki}
						setModalPokiId={setModalPokiId}
					/>
				) :
				<Loading />
			}
		</div>
	)
}

export default PokiList