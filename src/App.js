import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'LOGRANDO TODOSEARCH', completed: true },
// ];

// localStorage.setItem('TODOS_V1', defaultTodos);
// localStorage.removeItem('TODOS_V1');
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

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []); // dejamo de usar para usar el cusotm hook: const[todos, setTodos] = React.useState(parsedTodos);  //const[todos, setTodos] = React.useState(defaultTodos);   //estado
  const[searchValue, setSearchValue] = React.useState('');  //estado

  const completedTodos = todos.filter(todos => !!todos.completed).length;       //estado derivados
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
      (todos) => todos.text == text 
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
      (todos) => todos.text == text 
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos); //guardarTodos(newTodos); //setTodos(newTodos);
  };

  return (
    <>
      <TodoCounter 
        completed={completedTodos}
        total={totalTodos} 
      />
      <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
      />

      <TodoList>
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
    </>
  );
}

export default App;
