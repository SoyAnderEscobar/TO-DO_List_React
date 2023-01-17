import React from "react";
import { useLocalStorage } from "./TodoLocalStorage";


const todoContext = React.createContext();


function TodoProvider(props)
{

    const {
        item:todos,
        saveItem:saveTodos,
        loading,
        error
    }= useLocalStorage('TODOS_V1',[])
    // const [patito, savePatito] = useLocalStorage('PATITO_V1','Hola desde el Local Storage')

    //Estado para el buscador del aplicativo
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);


    /*Variables y constantes de la aplicacion*/

    //Cantidad de todos los todos que estan completados
    const TodoCompleted = todos.filter(todo=> !!todo.completed).length

    //Cantidad total de todos
    const total = todos.length

    //Declaracion de una variable para ser utilizada con el buscador
    let SearchedTodos=[]
    /*funciones de la aplicacion*/

    //valido que el buscador este vacio
    if (!searchValue>=1) {

        //si el buscador esta vacio entonces los se asigna los todos existentes a SearchedTodos
        SearchedTodos = todos

    }else{

        SearchedTodos = todos.filter(todo => {

            //convierto el texto de los todos en minuscula y lo declaro en todoText
            const todoText = todo.text.toLocaleLowerCase();

            //convierto el texto en el buscador en minuscula y lo declaro en searchText
            let searchText = searchValue.toLocaleLowerCase();

            //retorno los todos que tengan alguna similitud con lo escrito en el buscador
            return todoText.includes(searchText)

        });

    }

    const addTodo = (text) => {

        // const todoKey = todos.findIndex(todo=> todo.text === text )
//   {text:"cortar cebolla", completed:false},

        todos.push({ completed:false, text:text})

        const NewTodo = [...todos]

        // NewTodo[todoKey].completed=true

        saveTodos(NewTodo)

    }


    const completeTodo = (text) => {

        const todoKey = todos.findIndex(todo=> todo.text === text )

        const NewTodo = [...todos]

        NewTodo[todoKey].completed=true

        saveTodos(NewTodo)

    }

    const deleteTodo = (text)=> {

        const todoKey = todos.findIndex(todo => todo.text === text)

        const NewTodo = [...todos]

        NewTodo.splice(todoKey,1)

        saveTodos(NewTodo)
    }


    return (
        <todoContext.Provider value={{
            TodoCompleted,
            total,
            searchValue,
            setSearchValue,
            SearchedTodos,
            completeTodo,
            deleteTodo,
            nombre:props.nombre,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </todoContext.Provider>
    )
}

export {TodoProvider, todoContext}