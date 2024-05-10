import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

// crear y guardar:

// const defaultTodos = [
//   { text: 'Cortar manzana', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'LOGRANDO TODOSEARCH', completed: true },
// ]

// const stringifiedTodos = JSON.stringify(defaultTodos)

// localStorage.setItem('TODOS_V2', stringifiedTodos)

// localStorage.getItem('TODOS_V2')


// abrir:

// const localStorageTodos = localStorage.getItem('TODOS_V2')

// let parsedItems = JSON.parse(localStorageTodos)


function App() {

  const {
    item:todos,
    saveItem:saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V2', []); // dejamo de usar para usar el cusotm hook: const[todos, setTodos] = React.useState(parsedTodos);  //const[todos, setTodos] = React.useState(defaultTodos);   //estado
  const[searchValue, setSearchValue] = React.useState('');  //estado
  //const completedTodos = todos.filter(todo => !!todo.completed).length;       //estado derivados con error
  const completedTodos = todos.filter(todos => !!todos.completed).length;   //el mismo estado derivado corregido
  const totalTodos = todos.length;


  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completarTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text 
    );
    newTodos[todoIndex].completed=true;
    saveTodos(newTodos); //guardarTodos(newTodos); //setTodos(newTodos);  aqui cambiando a guardarTodos

  };

  const borrarTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text 
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos); //guardarTodos(newTodos); //setTodos(newTodos);
  };

  return(
    <AppUI
    loading={loading}
    error={error}
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completarTodo={completarTodo}
    borrarTodo={borrarTodo}
    />
  );
  
}

export default App;
