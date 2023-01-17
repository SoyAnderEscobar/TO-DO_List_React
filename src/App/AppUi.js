import React from "react";
import { todoContext } from "../TodoContext";
import { TodoCount} from "../TodoCount";
import { TodoSearch} from "../TodoSearch";
import { TodoList} from "../TodoList";
import {TodoItem} from '../TodoItem';
import { TodoButton } from "../TodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import 'remixicon/fonts/remixicon.css'


function AppUi()
{

    const {
        loading,
        error,
        completeTodo,
        deleteTodo,
        SearchedTodos,
        nombre,
        openModal,
        setOpenModal
    } = React.useContext(todoContext)


    return(

        <React.Fragment>

            <TodoCount/>

            <TodoSearch/>

            {/* <todoContext.Consumer>
                {({loading, error, completeTodo, deleteTodo, SearchedTodos})=>( */}

                    <TodoList>

                        {loading  && <p>No te desesperes, estamos cargando</p>}
                        { error && <p>Desesperate, algo salio mal</p> }
                        { (!error && !loading && !SearchedTodos.length ) &&  <p>¡Crea tu primer TODO!</p>}
                        { SearchedTodos.map(todo => (

                            <TodoItem key={todo.text} text={todo.text} completed={todo.completed}
                            onCompleted={()=>completeTodo(todo.text)}
                            onDelete={()=>deleteTodo(todo.text)}
                            />

                        ))}
                    </TodoList>

                {/* )} */}
            {/* </todoContext.Consumer> */}


            {!!openModal && (

                <Modal>
                    <TodoForm/>
                </Modal>
            )}

            <TodoButton/>

            <span style={{margin:'2rem', position:"absolute", marginBottom:"0px" }}>Created by {nombre}</span>


        </React.Fragment>

    );
}

export {AppUi};