import React from "react";
import HomePageCover from "../Pages/HomePageCover/HomePageCover";
import HomePageContent from "../Pages/HomePageContent/HomePageContent";
import PageNoFind from "../Pages/PageNoFind/PageNoFind";
export const RoutesList = [
	{ path: '/', element: <HomePageCover /> },
	{ path: '/PokiContent', element: <HomePageContent /> },
	{ path: '*', element: <PageNoFind /> }
]