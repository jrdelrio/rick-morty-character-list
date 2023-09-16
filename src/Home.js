import React, { useState } from "react";
import CharacterCard from "./CharacterCard.jsx";
import Input from "./input.jsx";

//create your first component
const Home = () => {
  let [texto, setTexto] = useState("");

  const funcionCallBack = (input) => {
    setTexto(input);
  };

  return (
    <>
      <h1>Listado</h1>
      <Input filtrar={funcionCallBack} />
      <div className="row grid">
        <CharacterCard inputText={texto} />
      </div>
    </>
  );
};

export default Home;
