import React from 'react'
import { Route, Routes } from "react-router-dom";
import { RoutesList } from '../Routes/Route';
import HomePage from '../Pages/HomePage/HomePage';
const AppRouter = () => {
	return (
		<Routes>
			{
				RoutesList.map((el) =>
					<Route path={el.path} element={el.element} key={el.path} />
				)
			}
			<Route path={"*"} element={<HomePage />} />
		</Routes>

	)
}

export default AppRouter