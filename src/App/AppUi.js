import React from "react";
import { TodoCount} from "../TodoCount";
import { TodoSearch} from "../TodoSearch";
import { TodoList} from "../TodoList";
import {TodoItem} from '../TodoItem';
import { TodoButton } from "../TodoButton";
import 'remixicon/fonts/remixicon.css'


function AppUi({
    TodoCompleted,
    total,
    searchValue,
    setSearchValue,
    SearchedTodos,
    completeTodo,
    deleteTodo,
    nombre
})
{
    return(

        <React.Fragment>

            <TodoCount
                completed={TodoCompleted}
                total={total}
            />

            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
                { SearchedTodos.map(todo => (

                    <TodoItem key={todo.text} text={todo.text} completed={todo.completed}
                    onCompleted={()=>completeTodo(todo.text)}
                    onDelete={()=>deleteTodo(todo.text)}
                    />

                ))}
            </TodoList>

            <TodoButton/>

            <span style={{margin:'2rem', position:"absolute", marginBottom:"0px" }}>Created by {nombre}</span>

        </React.Fragment>

    );
}

export {AppUi};