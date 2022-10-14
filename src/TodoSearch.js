import React from "react";
import './TodoSearch.css';

function TodoSearch(){

    const [searchValue, setSearchValue] = React.useState('');

    const searchTask = (e)=>{
        console.log(e.target.value)
        setSearchValue(e.target.value)
    }

    return (
        <React.Fragment>

            <div className="card">
                <input placeholder="Buscar" className="buscador"
                    value={searchValue}
                    onChange={searchTask}
                />
                {/* <p style={{marginTop:"15px"}}>{searchValue}</p> */}
            </div>
        </React.Fragment>
    );
}

export {TodoSearch};