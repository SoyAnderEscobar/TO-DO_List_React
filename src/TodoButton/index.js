import React from "react";
import './TodoButton.css'

function TodoButton(){

    const saludo = (nombre)=>{
        alert(`Hola ${nombre}`)
    }

    return(
        <button className="ButtonCreateTask"
            onClick={()=> saludo('Anderson')}
        >
            <span>+</span>
        </button>
    )
}

export {TodoButton};