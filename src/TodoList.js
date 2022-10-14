import React from "react";
import './TodoList.css'

function TodoList(props){
    return (

        <ul className="card">
            {/* los props.children en este caso son los li que estan en el componente TodoItem */}
            {props.children}
        </ul>

    );
}

export {TodoList};