import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
  { text: 'LOGRANDO TODOSEARCH', completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);   //estado
  const[searchValue, setSearchValue] = React.useState('');  //estado

  const completedTodos = todos.filter(todos => !!todos.completed).length;       //estado derivados
  const totalTodos = todos.length;           //estado derivados

  const searchedTodos = todos.filter(
    (todos) => {
      //return todos.text.toLowerCase().includes(searchValue.toLocaleLowerCase());  una forma de hacerlo
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
    setTodos(newTodos);
  };

  const borrarTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todos) => todos.text == text 
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
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
