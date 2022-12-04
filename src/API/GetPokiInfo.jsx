// static async getPokiName(name) {
// 	const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + name);
// 	return (response.data);
// }
import axios from "axios";
import { changeListFalse } from "../redux/reducers/listLoadingReducer";
import { getPokemons } from "../redux/reducers/PokemonReducer";
export const getPokiName = () => {
	return function (dispath) {
		axios.get('https://pokeapi.co/api/v2/pokemon/' + bulbasaur)
			.then(response => getPoki(response.data))
			.then(pokiList => dispath(getPokemons(pokiList)))
			.then(() => dispath(changeListFalse(true)))
	}
}

