import React from "react";

function TodoSearch(){
    return (
        <React.Fragment>

            <label>
                Buscador
                <input placeholder="escriba para buscar"/>
            </label>
        </React.Fragment>
    );
}

export {TodoSearch};