import React from "react";
import CharacterGrid from "./characterGrid.jsx";
import data from "./data.json"

//create your first component
const Home = () => {
	return (
		<>
		<h1>Listado</h1>
		<CharacterGrid list={data}/>
		</>
	);
};

export default Home;
