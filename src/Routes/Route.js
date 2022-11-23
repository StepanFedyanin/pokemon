import React from "react";
import HomePageCover from "../Pages/HomePageCover/HomePageCover";
import HomePageContent from "../Pages/HomePageContent/HomePageContent";

export const RoutesList = [
	{ path: '/cover', element: <HomePageCover /> },
	{ path: '/PokiContent', element: <HomePageContent /> }
]