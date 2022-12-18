import React from "react";


const CharacterCard = (props) => {

    return (
        <div className="card">
            <p>{props.index}</p>
            <img className="char-image" src={props.image} alt=""/>
            <h3 className="char-name">{props.name}</h3>
            <p className="char-loc" >{props.location}</p>
        </div>
    );
};

export default CharacterCard;