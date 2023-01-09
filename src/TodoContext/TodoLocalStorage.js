import React from "react";

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

        },[])

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

export {useLocalStorage}