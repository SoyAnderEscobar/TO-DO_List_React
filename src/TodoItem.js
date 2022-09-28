import React from "react";
import './TodoItem.css'

function TodoItem(props){
    return (

        <li className="">
            {props.text}
        </li>
    );
}

export {TodoItem};