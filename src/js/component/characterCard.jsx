import React, { useEffect, useState } from 'react';
import Data from "./data.json"

const CharacterCard = (props) => {

    const [usefulData, setFilteredData] = useState(Data);
    let input = props.inputText;

    useEffect(()=>{

        // filtrar lista origial
        // actualizo el estado
        let filteredList = [];

        if (props.inputText === ""){
            filteredList = Data
        }else{
            for (let char of Data){
                if (char.name.toLowerCase().includes(props.inputText.toLowerCase())){
                    filteredList.push(char)
                };
            };

        };

        setFilteredData(filteredList);
    }, [input]);

    let mapedData = usefulData.map((char) => {
        return (<div className="card col-4" key={char.id}>
                    <img className="char-image" src={char.image} alt=""/>
                    <h3 className="char-name">{char.name}</h3>
                    <p className="char-loc" >{char.location.name}</p>
                </div>
                )});

    return (
        <>
        {mapedData}
        </>
    );
};

export default CharacterCard;