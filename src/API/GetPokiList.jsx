import axios from "axios";
import { changeListLoading, getPokemons } from "../redux/reducers/PokemonReducer";
export const getPokiList = (limit, pagination) => {
	return function (dispath) {
		axios.get('https://pokeapi.co/api/v2/pokemon', {
			params: {
				limit: 9,
				offset: pagination
			}
		}
		)
			.then(response => getPoki(response.data))
			.then(pokiList => dispath(getPokemons(pokiList)))
			.then(() => dispath(changeListLoading(true)))
	}
}
const getPoki = async (pokiList) => {
	const listPoki = []
	for (const poki of pokiList.results) {
		const response = await axios.get(poki.url);
		listPoki.push(response.data);
	}
	return listPoki
}
