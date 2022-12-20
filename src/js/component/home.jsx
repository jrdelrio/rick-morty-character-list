import React from "react";
import CharacterCard from "./characterCard.jsx";
import Input from "./input.jsx"

//create your first component
const Home = () => {

	return(
		<>
		<h1>Listado</h1>
		<Input />
		<div className="row grid">
			<CharacterCard />
		</div>
		</>

		);
};

export default Home;
