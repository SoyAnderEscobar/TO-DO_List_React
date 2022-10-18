  import React from "react";
  import { TodoCount} from "./TodoCount";
  import { TodoSearch} from "./TodoSearch";
  import { TodoList} from "./TodoList";
  import {TodoItem} from './TodoItem';
  import { TodoButton } from "./TodoButton";
  import 'remixicon/fonts/remixicon.css'

  const defaultTodos =[

    {text:"cortar cebolla", completed:true},
    {text:"cocinar", completed:false },
    {text:"comer", completed:true },
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

        const todoText = todo.text.toLocaleLowerCase();

        let searchText = searchValue.toLocaleLowerCase();

        return todoText.includes(searchText)

      });

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

              <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>

          ))}
        </TodoList>

        <TodoButton/>

        <span style={{margin:'2rem', position:"absolute", marginBottom:"0px" }}>Created by {props.nombre}</span>

      </React.Fragment>
    );

  }

  export default App;
