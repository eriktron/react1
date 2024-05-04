import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  if(total == completed){
    console.log('completaste los todos')
  }else{
    console.log('aun tienes pendientes')
  }
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
