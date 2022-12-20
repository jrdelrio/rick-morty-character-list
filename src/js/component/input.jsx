import React, { useState } from 'react';


const Input = (props) => {

    const handleClick = () => {
        
    }

    return(
        <form action="" className="input-search">
            <input type="text"  
             placeholder='filter here...' />
            <button onClick={handleClick}>filter</button>
        </form>
    );
}

export default Input;