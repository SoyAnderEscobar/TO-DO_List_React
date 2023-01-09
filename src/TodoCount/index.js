import React from "react";
import { todoContext } from "../TodoContext";
import './TodoCount.css'

function TodoCount(){

    const {TodoCompleted,total} = React.useContext(todoContext)

    return (
        <React.Fragment>
        <header className="card">
            <h1 className="titulo">Tienes {TodoCompleted} de {total} tareas completas</h1>
        </header>
        </React.Fragment>
    );
}

export {TodoCount};