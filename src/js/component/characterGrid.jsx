import React from "react";
import CharacterRow from "./characterRow.jsx";

const CharacterGrid = (props) => {

    const auxList = props.list.map((character) => (

        <li key={character.id}>
            <div className="container">
                <div className="row">
                    <CharacterRow character={character}/>
                </div>
            </div>
        </li>
    ));

    return(
        <ul>{auxList}</ul>
    )};

export default CharacterGrid;

