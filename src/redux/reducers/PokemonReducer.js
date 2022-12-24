const defaultState = {
	pokimons: [],
	loadingList: false
}
const GET_POKEMONS = 'GET_POKEMONS'
const CHANGE_LIST_LOADING = 'CHANGE_LIST_LOADING'

export const PokemonReducer = (state = defaultState, action) => {
	switch (action.type) {
		case GET_POKEMONS:
			return { ...state, pokimons: action.payload }
		case CHANGE_LIST_LOADING:
			return { ...state, loadingList: action.payload }
		default:
			return state
	}
}
export const getPokemons = (payload) => { return { type: GET_POKEMONS, payload } }
export const changeListLoading = (payload) => { return { type: CHANGE_LIST_LOADING, payload } }
