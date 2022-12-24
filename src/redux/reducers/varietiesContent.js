const defaultState = {
	name: '',
	stats: [],
	sprites: ''
}
const CHANGE_VARIERIES_CONTENT = 'CHANGE_VARIERIES_CONTENT'


export const VarietiesContent = (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_VARIERIES_CONTENT:
			return {
				name: action.payload.name,
				stats: action.payload.stats,
				sprites: action.payload.sprites.other.home.front_default
			}
		default:
			return state
	}
}
export const ChangeVarietiesContent = (payload) => { return { type: CHANGE_VARIERIES_CONTENT, payload } }




