import React from "react";
import { AppUi } from "./AppUi";

// const defaultTodos =[

//   {text:"cortar cebolla", completed:false},
//   {text:"cocinar", completed:false },
//   {text:"comer", completed:false },
//   {text:"Dormir", completed:false },
// ];

function useLocalStorage(itemName, itemValue){

  const [error, cambiarError] = React.useState(false)
  const [loading, cambiarLoading] = React.useState(true)
  //Estados del custom hook
  const [item, changeItem] = React.useState(itemValue)

  React.useEffect(()=>{

    setTimeout(()=>{

      try {

        //consulta si en el local storage el item recibido por argumento
        let storedItem = localStorage.getItem(itemName)

        //Defino una variable para ser utilizada mas adelante
        let defaultItem;
        //valido que el storedItem no este vacio
        if(storedItem){

          //en caso de no estar vacio parseo el contenido y lo guardo en defaultItem
          defaultItem= JSON.parse(storedItem)

        }else{

          storedItem = localStorage.setItem(itemName, JSON.stringify(itemValue) )

          defaultItem = storedItem

        }

        changeItem(defaultItem);

      } catch (error) {
        cambiarError(error)

      }finally{

        cambiarLoading(false)

      }
    },1000)

  })

  const saveItem = (newItem)=>{

    try {

      let stringItem= JSON.stringify(newItem)

      localStorage.setItem(itemName, stringItem)

      changeItem(newItem)
    } catch (error) {

      cambiarError(error)

    }


  }

  return {
    item,
    saveItem,
    loading,
    error
  };

  // return [item, saveItem]

}

function App(props) {

  // console.log('antes')
  // // React.useEffect(()=>{
  //   console.log('hola')
  // // })
  // console.log('despues')


  /*Estados de la Aplicación*/

  //Custom React Hook para almacenar informacion en Local Storage
  const {
    item:todos,
    saveItem:saveTodos,
    loading,
    error
    }= useLocalStorage('TODOS_V1',[])
  // const [patito, savePatito] = useLocalStorage('PATITO_V1','Hola desde el Local Storage')

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

    <AppUi
      TodoCompleted={TodoCompleted}
      total={total}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      SearchedTodos={SearchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      nombre={props.nombre}
      loading={loading}
      error={error}
    />
  )

}

  export default App;
