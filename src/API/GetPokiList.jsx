import axios from "axios";
import { useState } from "react";
export default class PostPokiList {
	static async getAll(limit) {
		const response = await axios.get('https://pokeapi.co/api/v2/pokemon', {
			params: {
				limit: limit
			}
		});
		getPoki(response.data);
		console.log(1);
	}
}
const listPoki = []
const getPoki = (pokiList) => {
	// console.log(pokiList);
	pokiList.results.map(async (poki) => {
		const response = await axios.get(poki.url);
		listPoki.push(response);
		console.log(listPoki);
	})
}
