import './CreateTodoButton.css';

function CreateTodoButton( {setOpenModal} ) {
  return (
    <button 
      className="CreateTodoButton"
      onClick={
        // (event) => {
        //   console.log('un clic aqui')
        //   console.log(event)
        //   console.log(event.target)
        //}
        () => {setOpenModal(state => !state);
          
        }
      }
    >+</button>
  );
}

export { CreateTodoButton };
