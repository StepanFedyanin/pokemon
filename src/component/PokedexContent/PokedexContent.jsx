import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokiList } from '../../API/GetPokiList'
import Loading from '../Loading/Loading'
import ModalPoki from '../ModalPoki/ModalPoki'
import Pagination from '../Pagination/Pagination'
import PokiList from '../PokiList/PokiList'
import DropdownMenu from '../UI/DropdownMenu/DropdownMenu'
import Serch from '../UI/Serch/Serch'
import './HomeContent.scss'
function PokedexContent() {
	const dispath = useDispatch();
	const pokiList = useSelector(state => state.pokeList.pokimons)
	const loadingList = useSelector(state => state.pokeList.loadingList)
	const pagination = useSelector(state => state.pagination.pagination_value)
	// const [listTipo, setListTipo] = useState(['Normal', 'Combat', 'Flying', 'Poisonous', 'earthy', 'Stone', 'insect', 'ghostly', 'Steel', 'Magic', 'Fiery', 'Water', 'Herbal', 'Electric', 'Mental', 'Ice', 'Draconic', 'Dark']);
	// const [pagination, setPagination] = useState(0)
	// const [pokiList, setPokiList] = useState([]);
	// const [modalPoki, setModalPoki] = useState(false);
	// const [modalPokiId, setModalPokiId] = useState();

	useEffect(() => {
		dispath(getPokiList(pagination, pagination));
	}, [pagination])
	// console.log(pagination);

	const paginationChange = (value) => {
		// if (value == 'pref' && pagination != 0) {
		// 	setPagination(pagination - 9)
		// }
		// if (value == 'next') {
		// 	setPagination(pagination + 9)
		// }
	}
	return (
		<div className='PokedexContent'>
			<div className="PokedexContent__container">
				<div className="PokedexContent__title">
					<h1 className="PokedexContent__title--style">800 <span>Pokemons</span> for you to choose your favorite</h1>
				</div>
				<div className="PokedexContent__filter">
					<div className="PokedexContent__filter--serch">
						<Serch placeholder="name or id of the pokemon..." />
					</div>
					<div className="PokedexContent__filter--dropdown">
						{/* <DropdownMenu list={listTipo}>Tipo</DropdownMenu>
						<DropdownMenu list={listTipo}>Ataque</DropdownMenu>
						<DropdownMenu list={listTipo}>Experiencie</DropdownMenu> */}
					</div>
				</div>
				<div className="PokedexContent__content">
					{
						loadingList ?
							<div className="PokedexContent__content--list">
								<PokiList
									pokiList={pokiList}
								/>
								<Pagination />
							</div>

							:
							<Loading />

					}

				</div>
			</div>
			<ModalPoki />
		</div >
	)
}

export default PokedexContent