import React from "react";
import './TodoCount.css'

function TodoCount(){
    return (
        <React.Fragment>
        <header className="card">
            <h1>Tienes 2 de 3 tareas completas</h1>
        </header>
        </React.Fragment>
    );
}

export {TodoCount};