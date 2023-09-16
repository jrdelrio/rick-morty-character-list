import React, { useState } from 'react';

const Input = (props) => {

    const handleClick = function(event){
        event.preventDefault();
        console.log(event.target.value);
        props.filtrar(event.target.nameToSearch.value)
    };

    return(
        <form action="" className="input-search" onSubmit={handleClick}>
            <input type="text"  
             placeholder='filter here...' name="nameToSearch"/>
            <button type="submit">filter</button>
        </form>
    );
}

export default Input;