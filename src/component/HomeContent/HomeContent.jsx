import React, { useEffect, useState } from 'react'
import PostPokiList from '../../API/GetPokiList'
import PokiCard from '../PokiCard/PokiCard'
import DropdownMenu from '../UI/DropdownMenu/DropdownMenu'
import Serch from '../UI/Serch/Serch'
import './HomeContent.scss'
function HomeContent() {
	const listTipo = ['Bug', 'Dark', 'Dragon', 'Electric', 'Normal', 'Rock'];
	const [pokiList, setPokiList] = useState([])
	// const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
	// 	const response = await PostService.getAll(limit, page);
	// 	setPosts(response.data);
	// 	const totalCount = response.headers["x-total-count"];
	// 	setTotalPages(getPageCount(totalCount, limit));
	// });
	const getServise = async () => {
		const get = await PostPokiList.getAll(9)
		console.log(get);
		// setPokiList(get);
		// console.log(pokiList);
	}
	useEffect(() => {
		getServise();
	}, [])
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
					<PokiCard />
				</div>
			</div>
		</div>
	)
}

export default HomeContent