import React, { useEffect, useState } from 'react'
import PostPokiList from '../../API/GetPokiList'
import PokiCard from '../PokiCard/PokiCard'
import DropdownMenu from '../UI/DropdownMenu/DropdownMenu'
import Serch from '../UI/Serch/Serch'
import './HomeContent.scss'
function HomeContent() {
	const listTipo = ['Bug', 'Dark', 'Dragon', 'Electric', 'Normal', 'Rock'];
	const [pagination, setPagination] = useState(0)
	const [pokiList, setPokiList] = useState([])
	const getServise = async () => {
		const get = await PostPokiList.getAll(9, pagination)
		console.log(get);
		setPokiList(get);
	}
	useEffect(() => {
		getServise();
	}, [pagination])
	return (
		<div className='HomeContent'>
			<div className="HomeContent__container">
				<div className="HomeContent__title">
					<h1>800 Pokemons for you to choose your favorite</h1>
				</div>
				<div className="HomeContent__filter">
					<div className="HomeContent__filter--serch">
						<Serch placeholder="Encuentra tu pokémon..." />
					</div>
					<div className="HomeContent__filter--dropdown">
						<DropdownMenu list={listTipo}>Tipo</DropdownMenu>
						<DropdownMenu list={listTipo}>Ataque</DropdownMenu>
						<DropdownMenu list={listTipo}>Experiencie</DropdownMenu>
					</div>
				</div>
				<div className="HomeContent__list">
					{
						pokiList.map(poki =>
							<PokiCard
								img={poki.sprites.front_default}
								name={poki.name}
								attack={poki.stats[4].base_stat}
								defanse={poki.stats[3].base_stat}
								descriptiont={poki.types}
							/>
						)
					}
				</div>
				<div className="pogination">
					<div className="pogination__item">
						<button className='pogination__item--btn' onClick={() => pagination != 0 ? setPagination(pagination - 9) : setPagination(pagination)}></button>
					</div>
					<div className="pogination__item">
						<button className='poginationshow__item--btn'></button>
					</div>
					<div className="pogination__item">
						<button className='pogination__item--btn' onClick={() => setPagination(pagination + 9)}></button>
					</div>
				</div>
			</div>
		</div >
	)
}

export default HomeContent