import React from "react";

function TodoSearch(){
    return (
        <React.Fragment>

            <div className="card">
                <label className="">
                    Buscador
                    <input placeholder="escriba para buscar"/>
                </label>
            </div>
        </React.Fragment>
    );
}

export {TodoSearch};