import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';

//function TodoCounter({ total, completed }) {
function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)
  
  // if(total == completed){
  //   console.log('completaste los todos')
  // }else{
  //   console.log('aun tienes pendientes')
  // }
  return (
    <h1 className="TodoCounter">
      {/* Has completado <span>{completed}</span> de <span>{total}</span> TODOs */}
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs    
    </h1>
  );
}

export { TodoCounter };
