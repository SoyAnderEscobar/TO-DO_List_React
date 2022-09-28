import React from "react";
import './TodoSearch.css';

function TodoSearch(){
    return (
        <React.Fragment>

            <div className="card">
                <label className="">
                    <input placeholder="escriba para buscar" className="buscador"/>
                </label>
            </div>
        </React.Fragment>
    );
}

export {TodoSearch};