  import React from "react";
  import { TodoCount} from "./TodoCount";
  import { TodoSearch} from "./TodoSearch";
  import { TodoList} from "./TodoList";
  import {TodoItem} from './TodoItem';
  import { TodoButton } from "./TodoButton";
  import 'remixicon/fonts/remixicon.css'

  const defaultTodos =[

    {text:"cortar cebolla", completed:false},
    {text:"cocinar", completed:false },
    {text:"comer", completed:false },
    {text:"Dormir", completed:false },
  ];



  function App(props) {

    //Search
    const [searchValue, setSearchValue] = React.useState('');

    //Todos
    const [todos, setTodo] = React.useState(defaultTodos)

    //Completed Todos cantidad
    const TodoCompleted = todos.filter(todo=> !!todo.completed).length

    //Total Tasks cantidad
    const total = todos.length


    let SearchedTodos=[]


    if (!searchValue>=1) {

      SearchedTodos = todos

    }else{

      SearchedTodos = todos.filter(todo => {

        //convierto el texto de los todos en minuscula
        const todoText = todo.text.toLocaleLowerCase();

        //convierto el texto en el buscador en minuscula
        let searchText = searchValue.toLocaleLowerCase();

        //retorno los todos
        return todoText.includes(searchText)

      });

    }

    const completeTodo = (text) => {

      // console.log(`la tarea ${text} fue completada`)

      const todoKey = todos.findIndex(todo=> todo.text === text )

      const NewTodo = [...todos]

      NewTodo[todoKey].completed=true

      setTodo(NewTodo)

    }

    const deleteTodo = (text)=> {

      const todoKey = todos.findIndex(todo => todo.text === text)

      const NewTodo = [...todos]

      NewTodo.splice(todoKey,1)

      setTodo(NewTodo)

    }

    return (
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

        <span style={{margin:'2rem', position:"absolute", marginBottom:"0px" }}>Created by {props.nombre}</span>

      </React.Fragment>
    );

  }

  export default App;
