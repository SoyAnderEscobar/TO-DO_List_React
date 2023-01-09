import React from "react";
import { AppUi } from "./AppUi";
import { TodoProvider } from "../TodoContext";
// const defaultTodos =[

//   {text:"cortar cebolla", completed:false},
//   {text:"cocinar", completed:false },
//   {text:"comer", completed:false },
//   {text:"Dormir", completed:false },
// ];

function App(props) {

  return (
    <TodoProvider nombre={props.nombre}>
      <AppUi/>
    </TodoProvider>
  )

}

  export default App;
