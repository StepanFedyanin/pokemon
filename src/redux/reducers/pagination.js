const defaultState = {
	pagination_value: 0
}
const ADD_PAGINATION_VALUE = 'ADD_PAGINATION_VALUE'
const SUBTRACT_PAGINATION_VALUE = 'SUBTRACT_PAGINATION_VALUE'
export const pagination = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_PAGINATION_VALUE:
			return { pagination_value: state.pagination_value + action.payload }
		case SUBTRACT_PAGINATION_VALUE:
			return { pagination_value: state.pagination_value != 0 ? state.pagination_value - action.payload : state.pagination_value }
		default:
			return state
	}
}
export const addValuePagination = (payload) => { console.log(payload); return { type: ADD_PAGINATION_VALUE, payload } }
export const subtractValuePagination = (payload) => { console.log(payload); return { type: SUBTRACT_PAGINATION_VALUE, payload } }