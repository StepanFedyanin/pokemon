import axios from "axios";
import { getPokemons } from "../redux/reducers/PokemonReducer";
import { AddNormal } from "../redux/reducers/PokiVarietiesReducer";
import { ChangeVarietiesContent } from "../redux/reducers/varietiesContent";
export const GetPokiListVarieties = (limit, pagination) => {
	return function (dispath) {
		axios.get("https://pokeapi.co/api/v2/type/")
			.then(response => getTypesPoki(response.data.results))
			.then(types => getListPoki(types[0].pokemon))
			.then(items => dispath(AddNormal(items)))
			.then(item => dispath(ChangeVarietiesContent(item.payload[10])))

	}
}
const getTypesPoki = async (pokiList) => {
	const TypeslistPoki = []
	for (const type of pokiList) {
		const response = await axios.get(type.url);
		TypeslistPoki.push(response.data);
	}
	return TypeslistPoki
}
const getListPoki = async (pokiList) => {
	const listPoki = []
	for (const type of pokiList) {
		const response = await axios.get(type.pokemon.url);
		listPoki.push(response.data);
		if (type.pokemon.name == 'chansey') {
			break
		}
	}

	return listPoki
}
