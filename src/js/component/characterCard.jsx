import React, { useEffect, useState } from 'react';
import Data from "./data.json"

const CharacterCard = () => {

    //const [usefulData, setFilteredData] = useState([]);

    let mapedData = Data.map((char) => {
        return (<div className="card col-4" key={char.id}>
                    <img className="char-image" src={char.image} alt=""/>
                    <h3 className="char-name">{char.name}</h3>
                    <p className="char-loc" >{char.location.name}</p>
                </div>
                )});

    console.log("así se va el maped data")                        
    console.log(mapedData)

    return (
        <>
        {mapedData}
        </>
    );
};

export default CharacterCard;