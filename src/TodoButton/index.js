import React from "react";
import './TodoButton.css'
import { todoContext } from "../TodoContext";


function TodoButton(){


    const {setOpenModal} = React.useContext(todoContext);

    // const saludo = (nombre)=>{
    //     alert(`Hola ${nombre}`)
    // }

    const clickButton = () =>{

        // if (openModal)
        //     active=false

        setOpenModal(prevState => !prevState)
    }
    return(
        <button className="ButtonCreateTask"
            // onClick={()=> saludo('Anderson')}
            onClick={()=>clickButton()}
        >
            <span>+</span>
        </button>
    )
}

export {TodoButton};