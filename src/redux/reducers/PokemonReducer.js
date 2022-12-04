const defaultState = {
	pokimons: []
}
const GET_POKEMONS = 'GET_POKEMONS'

export const PokemonReducer = (state = defaultState, action) => {
	switch (action.type) {
		case GET_POKEMONS:
			return { ...state, pokimons: [...state.pokimons, ...action.payload] }
		default:
			return state
	}
}
export const getPokemons = (payload) => { return { type: GET_POKEMONS, payload } }