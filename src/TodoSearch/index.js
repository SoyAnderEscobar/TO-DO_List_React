import React from "react";
import { todoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch(){

    const {searchValue, setSearchValue} = React.useContext(todoContext)

    const searchTask = (e)=>{
        setSearchValue(e.target.value)
    }

    return (
        <React.Fragment>

            <div className="card">
                <input placeholder="Buscar" className="buscador"
                    value={searchValue}
                    onChange={searchTask}
                />
            </div>
        </React.Fragment>
    );
}

export {TodoSearch};