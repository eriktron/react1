import './TodoSearch.css';
import React from 'react';

function TodoSearch({searchValue, setSearchValue}) {

  return (
    <input
      placeholder="escriba para buscar ..."
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
