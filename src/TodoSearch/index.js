import './TodoSearch.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

// function TodoSearch({searchValue, setSearchValue}) {
function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext)
  return (
    <input
      placeholder="busca tu tarea..."
      className="TodoSearch"
      value={searchValue}
      onChange={(event) =>{
        setSearchValue(event.target.value)
        // console.log('escribiste en el todosearch');
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
