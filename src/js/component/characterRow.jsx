import React from "react";
import CharacterCard from "./characterCard.jsx";

const CharacterRow = (props) => {

    return(
        <>
        <div className="col lg-4 ">
            <CharacterCard image={props.character.image} 
                            name={props.character.name} 
                            location={props.character.location.name}
                            index={props.character.id}/>
        </div>

        <div className="col lg-4 ">
            <CharacterCard image={props.character.image} 
                           name={props.character.name} 
                           location={props.character.location.name}
                           index={props.character.id}/>
        </div>

        <div className="col lg-4 ">
            <CharacterCard image={props.character.image} 
                           name={props.character.name} 
                           location={props.character.location.name}
                           index={props.character.id}/>
        </div>
        </>
    );
}

export default CharacterRow;
// como limpiar un poco este código?? crear funcion que retorne un <CharacterCard bla bla bla />


// como poner diferentes cards en las comumnas? 
// algo tipo:
// if ({props.index}%3 === 0) {   //usar el index como divisor
//     return(
//         <CharacterCard />
//     )
// }

