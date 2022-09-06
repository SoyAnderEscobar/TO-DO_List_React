import React from "react";
import { TodoCount} from "./TodoCount";
import { TodoSearch} from "./TodoSearch";
import { TodoList} from "./TodoList";
import {TodoItem} from './TodoItem';

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
    </React.Fragment>
  );
}

export default App;
