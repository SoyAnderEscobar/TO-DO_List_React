  import React from "react";
  import { AppUi } from "./AppUi";

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
      <AppUi
        TodoCompleted={TodoCompleted}
        total={total}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        SearchedTodos={SearchedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        nombre={props.nombre}
      />
    );

  }

  export default App;
