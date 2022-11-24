import React, { useEffect, useState } from 'react'
import { useCallback } from 'react'
import PostPokiList from '../../API/GetPokiList'
import Loading from '../Loading/Loading'
import ModalPoki from '../ModalPoki/ModalPoki'
import Pagination from '../Pagination/Pagination'
import PokiList from '../PokiList/PokiList'
import DropdownMenu from '../UI/DropdownMenu/DropdownMenu'
import Serch from '../UI/Serch/Serch'
import './HomeContent.scss'
function HomeContent() {
	const [listTipo, setListTipo] = useState(['Normal', 'Combat', 'Flying', 'Poisonous', 'earthy', 'Stone', 'insect', 'ghostly', 'Steel', 'Magic', 'Fiery', 'Water', 'Herbal', 'Electric', 'Mental', 'Ice', 'Draconic', 'Dark']);
	const [pagination, setPagination] = useState(0)
	const [pokiList, setPokiList] = useState([]);
	const [modalPoki, setModalPoki] = useState(false);
	const [LoadingBoolean, setLoadingBoolean] = useState(false);
	const [modalPokiId, setModalPokiId] = useState();

	const getServise = async () => {
		const get = await PostPokiList.getAll(9, pagination)
		setPokiList(get);
		setLoadingBoolean(true)
	}
	useEffect(() => {
		getServise();
	}, [pagination])

	const paginationChange = (value) => {
		if (value == 'pref' && pagination != 0) {
			setPagination(pagination - 9)
		}
		if (value == 'next') {
			setPagination(pagination + 9)
		}
		setLoadingBoolean(false)
	}
	return (
		<div className='HomeContent'>
			<div className="HomeContent__container">
				<div className="HomeContent__title">
					<h1 className="HomeContent__title--style">800 <span>Pokemons</span> for you to choose your favorite</h1>
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
				<div className="HomeContent__content">
					{
						LoadingBoolean ?
							<div className="HomeContent__content--list">
								<PokiList
									pokiList={pokiList}
									setModalPoki={setModalPoki}
									setModalPokiId={setModalPokiId}
								/>
								<Pagination paginationChange={paginationChange} />
							</div>

							:
							<Loading />

					}

				</div>
			</div>
			<ModalPoki modalPoki={modalPoki} setModalPoki={setModalPoki} modalPokiId={modalPokiId} />
		</div >
	)
}

export default HomeContent