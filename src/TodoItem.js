import React from "react";
import './TodoItem.css'

function TodoItem(props){
    return (
        <li className="">
            <span>
            <i class="ri-check-line item-icon item-icon-check"></i>
            </span>
            <span className="item-text">
                {props.text}
            </span>
            <span>
                <i class="ri-delete-bin-5-line item-icon item-icon-delete"></i>
            </span>
        </li>
    );
}

export {TodoItem};