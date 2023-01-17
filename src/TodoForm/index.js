import React from "react";
import { todoContext } from "../TodoContext";
import './TodoForm.css'


function TodoForm(){


    const {
        setOpenModal,
        addTodo
    } = React.useContext(todoContext)

    const [NewTodo, setNewTodo] = React.useState('');

    const onCancel = ()=>
    {
        setOpenModal(false)
    }

    const onChange = (event)=>{
        // console.log(event.target.value)

        setNewTodo(event.target.value)
    }

    const onSubmit = (event)=>
    {
        event.preventDefault();

        addTodo(NewTodo)

        setOpenModal(false)
    }

    return (
        <form onSubmit={onSubmit} className="form">
            <label className="form-title">Crea una nuevo TODO
            </label>

            <textarea
                className="form-input"
                onChange={onChange}
                placeholder="Nueva tarea">
            </textarea>

            <div className="form-button">
                <button type="button" onClick={onCancel} className='form-button_button cancel'>
                    Cancelar
                </button>

                <button type="submit" className="form-button_button submit">
                    Agregar
                </button>
            </div>

        </form>
    );


}


export {TodoForm};