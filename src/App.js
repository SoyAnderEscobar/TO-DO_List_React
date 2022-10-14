  import React from "react";
  import { TodoCount} from "./TodoCount";
  import { TodoSearch} from "./TodoSearch";
  import { TodoList} from "./TodoList";
  import {TodoItem} from './TodoItem';
  import { TodoButton } from "./TodoButton";
  import 'remixicon/fonts/remixicon.css'

  const todos =[

    {text:"cortar cebolla", completed:'false'},
    {text:"cocinar", completed:'false'},
    {text:"comer", completed:'false'},
  ];



  function App(props) {
    return (
      <React.Fragment>
        <TodoCount/>
        <TodoSearch/>
        <TodoList>
          { todos.map(todo => (

              <TodoItem key={todo.text} text={todo.text}/>

          ))}
        </TodoList>

        <TodoButton/>
        <span style={{margin:'2rem', position:"absolute", marginBottom:"0px" }}>Created by {props.nombre}</span>
      </React.Fragment>
  );
  }

  export default App;
