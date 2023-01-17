import React from "react";
import './TodoButton.css'
import { todoContext } from "../TodoContext";


function TodoButton(){


    const {setOpenModal} = React.useContext(todoContext);

    const clickButton = () =>{


        setOpenModal(prevState => !prevState)
    }
    return(
        <button className="ButtonCreateTask"
            onClick={()=>clickButton()}
        >
            <span>+</span>
        </button>
    )
}

export {TodoButton};