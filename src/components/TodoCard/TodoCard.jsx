import './TodoCard.scss';

const TodoCard = ({ todo, handleDelete, handleComplete }) => {
  return (
    <div className="todo-card">
      <div className={todo.completed ? "check__container checked" : "check__container"} onClick={() => handleComplete(todo.id)} >
        {todo.completed && <img src='icon-check.svg' alt='X' />}
      </div>
      <div className="content__container">
        <span className={todo.completed ? "strike" : ""}>{todo.title}</span>
        <div className='cross__container' onClick={() => handleDelete(todo.id)} >
          <img src="icon-cross.svg" alt="Delete" />
        </div>
      </div>
    </div>
  )
}

export default TodoCard
