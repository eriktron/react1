import React from "react";

function useLocalStorage(itemName, initialValue){
   
    const localStorageItem = localStorage.getItem('itemName');
    let parsedItem;
  
    if(!localStorageItem){
      localStorage.setItem('TODOS_V1', JSON.stringify([]))
      parsedItem = [];
    }else{
      parsedItem = JSON.parse(localStorageItem);
    }
  
    const [item, setItem] = React.useState();
  
    const saveItem = (newItem) =>{
      localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return [item, saveItem];
  }

export { useLocalStorage };