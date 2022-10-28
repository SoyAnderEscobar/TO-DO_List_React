import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}){

    const searchTask = (e)=>{
        // console.log(e.target.value)
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