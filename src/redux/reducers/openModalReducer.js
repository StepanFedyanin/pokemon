const defaultState = {
	loadingModal: false,
	id_Card: 0,
	pokemon_content: null,
	loadingModalContent: false
}
const CHANGE_MODAL_LOADING = 'CHANGE_MODAL_LOADING'
const CHANGE_CARD_ID = 'CHANGE_CARD_ID'
const CHANGE_POKI_CONTENT = 'CHANGE_POKI_CONTENT'
const MODAL_LOADING_CONTENT = 'MODAL_LOADING_CONTENT'




export const openModalReducer = (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_MODAL_LOADING:
			return { ...state, loadingModal: action.payload }
		case CHANGE_CARD_ID:
			return { ...state, id_Card: action.payload }
		case CHANGE_POKI_CONTENT:
			return { ...state, pokemon_content: action.payload }
		case MODAL_LOADING_CONTENT:
			return { ...state, loadingModalContent: action.payload }
		default:
			return state
	}
}
export const changeModalLoading = (payload) => { return { type: CHANGE_MODAL_LOADING, payload } }
export const changeCardId = (payload) => { return { type: CHANGE_CARD_ID, payload } }
export const changePokiContent = (payload) => { return { type: CHANGE_POKI_CONTENT, payload } }
export const modalLoadingContent = (payload) => { return { type: MODAL_LOADING_CONTENT, payload } }



