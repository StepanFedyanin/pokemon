import axios from "axios";
import { useState } from "react";
export default class PostPokiList {
	static async getAll(limit, pagination) {
		const response = await axios.get('https://pokeapi.co/api/v2/pokemon', {
			params: {
				limit: limit,
				offset: pagination
			}
		});
		return (getPoki(response.data));
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

	// await pokiList.results.map(async (poki) => {

	// 	// console.log(listPoki);
	// })
