const defaultState = {
	loadingModal: false,
	id_Card: 0
}
const CHANGE_MODAL_LOADING = 'CHANGE_MODAL_LOADING'
const CHANGE_CARD_ID = 'CHANGE_CARD_ID'


export const openModalReducer = (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_MODAL_LOADING:
			return { ...state, loadingModal: action.payload }
		case CHANGE_CARD_ID:
			return { ...state, id_Card: action.payload }
		default:
			return state
	}
}
export const changeModalLoading = (payload) => { return { type: CHANGE_MODAL_LOADING, payload } }
export const changeCardId = (payload) => { return { type: CHANGE_CARD_ID, payload } }

