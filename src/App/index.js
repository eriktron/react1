import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './userLocalStorage';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'LOGRANDO TODOSEARCH', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []); // dejamo de usar para usar el cusotm hook: const[todos, setTodos] = React.useState(parsedTodos);  //const[todos, setTodos] = React.useState(defaultTodos);   //estado
  const[searchValue, setSearchValue] = React.useState('');  //estado

  const completedTodos = todos.filter(todo => !!todo.completed).length;       //estado derivados
  const totalTodos = todos.length; 

  const searchedTodos = todos.filter(
    (todos) => {
      const todoText = todos.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  ); 

  const completarTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todos) => todos.text === text 
    );
    newTodos[todoIndex].completed=true;
    saveTodos(newTodos); //guardarTodos(newTodos); //setTodos(newTodos);  aqui cambiando a guardarTodos
    //ejercicio de mostrar un mensaje cuando se completen los todos
    // if (completedTodos == totalTodos){
    //   console.log('todos completados');
    // }
  };

  const borrarTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todos) => todos.text === text 
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos); //guardarTodos(newTodos); //setTodos(newTodos);
  };

  return(
    <AppUI 
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
