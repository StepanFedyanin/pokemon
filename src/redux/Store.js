import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { listLoadingReducer } from "./reducers/listLoadingReducer";
import { openModalReducer } from "./reducers/openModalReducer";
import { PokemonReducer } from "./reducers/PokemonReducer";
const rootReducer = combineReducers({
	pokeList: PokemonReducer,
	loadingList: listLoadingReducer,
	openModal: openModalReducer
})
export const store = configureStore({ reducer: rootReducer }, composeWithDevTools(applyMiddleware(thunk)))
