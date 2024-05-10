import React from "react";

function useLocalStorage(itemName, initialValue){
   
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
    //React.useEffect(()=>{
      
      if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue)); //localStorage.setItem('TODOS_V1', JSON.stringify([]))
        parsedItem = initialValue;
      }else{
        parsedItem = JSON.parse(localStorageItem);
        //setItem(parsedItem);
      };
    //}
  //);
   
    const [item, setItem] = React.useState(parsedItem);
  
    const saveItem = (newItem) =>{
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return [item, saveItem];
  }

export { useLocalStorage };