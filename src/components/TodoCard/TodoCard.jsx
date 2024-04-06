import './TodoCard.scss';

const TodoCard = ({ todo, handleDelete, handleComplete }) => {
  return (
    <div className="todo-card">
      <div className="content__container" onClick={() => handleComplete(todo.id)}>
        <div className={todo.completed ? "check__container checked" : "check__container"} >
          {todo.completed && <img src='icon-check.svg' alt='X' />}
        </div>
        <span className={todo.completed ? "strike" : ""}>{todo.title}</span>
      </div>
      <div className='cross__container' onClick={() => handleDelete(todo.id)} >
        <img src="icon-cross.svg" alt="Delete" />
      </div>
    </div>
  )
}

export default TodoCard
