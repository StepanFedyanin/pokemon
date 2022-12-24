import axios from "axios";
import { changeModalLoading, changePokiContent, modalLoadingContent } from "../redux/reducers/openModalReducer";
export const getPokiName = (idCard) => {
	return function (dispath) {
		// axios.get('https://pokeapi.co/api/v2/pokemon/' + idCard)
		// 	.then(response => dispath(changePokiContent(response.data)))
		// 	.then(() => dispath(modalLoadingContent(true)))
		// 	.catch(function (e) {
		// 		dispath(changeModalLoading(false))
		// 		console.log(e.response.status);
		// 	})
		axios.get('https://pokeapi.co/api/v2/pokemon/' + idCard)
			.then(result => {
				dispath(changePokiContent(result.data))
				dispath(modalLoadingContent(true))
			}, error => {
				dispath(changeModalLoading(false));
				dispath(modalLoadingContent(false))
			})
	}
}

