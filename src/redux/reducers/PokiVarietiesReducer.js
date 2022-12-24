const defaultState = {
	normal: []
	// listNormal:[],
	// fighting
	// flying
	// poison
	// ground
	// rock
	// bug
	// ghost
	// steel
	// fire
	// water
	// grass
	// electric
	// psychic
	// ice
	// dragon
	// dark
	// fairy
	// unknown
	// shadow
}
const ADD_VARIERIES_LIST = 'ADD_VARIERIES_LIST'


export const PokiVarietiesReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_VARIERIES_LIST:
			return { ...state, normal: action.payload }
		default:
			return state
	}
}
export const AddNormal = (payload) => { return { type: ADD_VARIERIES_LIST, payload } }




