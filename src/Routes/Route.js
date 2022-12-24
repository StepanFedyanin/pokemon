import React from "react";
import HomePage from "../Pages/HomePage/HomePage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PageNoFind from "../Pages/PageNoFind/PageNoFind";
import VarietiesContentPage from "../Pages/VarietiesContentPage/VarietiesContentPage";
export const RoutesList = [
	{ path: '/HomeContent', element: <HomePage /> },
	{ path: '/PokedexContent', element: <PokedexPage /> },
	{ path: '*', element: <PageNoFind /> },
	{ path: '/Varieties', element: <VarietiesContentPage /> },
]