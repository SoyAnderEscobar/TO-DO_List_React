import React from "react";
import './TodoItem.css'

function TodoItem(props){
    return (
        <li className={`${props.completed && 'active'}`}>
            <span>
            <i class="ri-check-line item-icon item-icon-check"></i>
            </span>
            <span className={`${props.completed && 'text-completed'}`}>
                {props.text}
            </span>
            <span>
                <i class="ri-delete-bin-5-line item-icon item-icon-delete"></i>
            </span>
        </li>
    );
}

export {TodoItem};