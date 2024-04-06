import { useState } from 'react';
import './CreateTodo.scss';

const CreateTodo = ({ todos, setTodos }) => {
  const [text, setText] = useState('');

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      if (text !== '') {
        setTodos([...todos, { id: todos[todos.length - 1].id + 1, title: text, completed: false }]);
        setText('');
      }
    }
  }

  function handleClick() {
    if (text !== '') {
      setTodos([...todos, { id: todos[todos.length - 1].id + 1, title: text, completed: false }]);
      setText('');
    }
  }

  return (
    <div className="create-todo">
      <div className="check__container">
        <img src="icon-plus.svg" alt="Add" onClick={handleClick} />
      </div>
      <input type="text" placeholder='Create a new todo...' onKeyDown={handleKeyDown} value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

export default CreateTodo
