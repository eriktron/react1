import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';

function AppUI(
 // {
    // loading,
    // error,
    // completedTodos,
    // totalTodos,
    // searchValue,
    // setSearchValue,
    // searchedTodos,
    // completarTodo,
    // borrarTodo,
//}
){
  const {
    loading,
    error,
    searchedTodos,
    completarTodo,
    borrarTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
    return (
        <>
          <TodoCounter 
            // completed={completedTodos}
            // total={totalTodos} 
          />
          <TodoSearch 
              // searchValue={searchValue}
              // setSearchValue={setSearchValue}
          />
  
          <TodoList>
            {loading && <p>Estamos cargando ...</p>}
            {error && <p>Estamos con un error ...</p>}
            {(!loading && searchedTodos.length === 0) && <p>Crear una Tarea ...</p>}
      
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete = {() => completarTodo(todo.text)}
                onDelete = {() => borrarTodo(todo.text)}
              />
            ))}
          </TodoList>
        
          <CreateTodoButton />

          {openModal && (
              <Modal>
                  La funcionalidad de agregar Todo
              </Modal>
          )}
        
        </>
      );
}

export { AppUI };