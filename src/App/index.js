import React from "react";
import { AppUi } from "./AppUi";

// const defaultTodos =[

//   {text:"cortar cebolla", completed:false},
//   {text:"cocinar", completed:false },
//   {text:"comer", completed:false },
//   {text:"Dormir", completed:false },
// ];

function useLocalStorage(itemName, itemValue){

  //consulta si en el local storage el item recibido por argumento
  let storedItem = localStorage.getItem(itemName)

  //Defino una variable para ser utilizada mas adelante
  let defaultItem;

  //valido que el storedItem no este vacio
  if(storedItem){

    //en caso de no estar vacio parseo el contenido y lo guardo en defaultItem
    defaultItem= JSON.parse(storedItem)

  }else{

    storedItem = localStorage.setItem(itemName,JSON.stringify(itemValue))

    defaultItem = itemValue

  }

  //Todos
  const [item, changeItem] = React.useState(defaultItem)


  const saveItem = (newItem)=>{

    let stringItem= JSON.stringify(newItem)

    localStorage.setItem(itemName, stringItem)

    changeItem(newItem)

  }

  return [item, saveItem]

}

function App(props) {
  
  /*Estados de la Aplicación*/

  //Custom React Hook para almacenar informacion en Local Storage
  const [todos, saveTodos] = useLocalStorage('TODOS_V1',[])

  const [patito, savePatito] = useLocalStorage('PATITO_V1','Hola desde el Local Storage')
  //Estado para el buscador del aplicativo
  const [searchValue, setSearchValue] = React.useState('');


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

    const completeTodo = (text) => {

      // console.log(`la tarea ${text} fue completada`) //esto puede ser una buena manera para ver lo que sucede

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

  return [
    <p>{patito}</p>,
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
  ];

}

  export default App;
