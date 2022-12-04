const defaultState = {
	loadingList: false
}
const CHANGE_LIST_FALSE = 'CHANGE_LIST_FALSE'
const CHANGE_LIST_TRUE = 'CHANGE_LIST_TRUE'

export const listLoadingReducer = (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_LIST_FALSE:
			return { ...state, loadingList: action.payload }
		case CHANGE_LIST_TRUE:
			return { ...state, loadingList: action.payload }
		default:
			return state
	}
}
export const changeListFalse = (payload) => { return { type: CHANGE_LIST_FALSE, payload } }
export const changeListTrue = (payload) => { return { type: CHANGE_LIST_TRUE, payload } }