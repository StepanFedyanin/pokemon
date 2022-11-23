import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AppRouter from "./Utils/AppRouter";

function App() {
	return (
		<div className="App">
				<BrowserRouter>
					<AppRouter />
				</BrowserRouter>
		</div>
	);
}

export default App;
