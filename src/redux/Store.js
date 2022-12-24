import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { openModalReducer } from "./reducers/openModalReducer";
import { pagination } from "./reducers/pagination";
import { PokemonReducer } from "./reducers/PokemonReducer";
import { PokiVarietiesReducer } from "./reducers/PokiVarietiesReducer";
import { VarietiesContent } from "./reducers/varietiesContent";
const rootReducer = combineReducers({
	pokeList: PokemonReducer,
	openModal: openModalReducer,
	pagination: pagination,
	varieties: PokiVarietiesReducer,
	varietiesContent: VarietiesContent,
})
export const store = configureStore({ reducer: rootReducer }, composeWithDevTools(applyMiddleware(thunk)))
