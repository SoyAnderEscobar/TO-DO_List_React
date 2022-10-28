import React from "react";
import './TodoCount.css'

function TodoCount(props){
    return (
        <React.Fragment>
        <header className="card">
            <h1 className="titulo">Tienes {props.completed} de {props.total} tareas completas</h1>
        </header>
        </React.Fragment>
    );
}

export {TodoCount};