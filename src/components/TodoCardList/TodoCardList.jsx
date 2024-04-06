import { useEffect, useState } from 'react';
import TodoCard from '../TodoCard/TodoCard';
import CreateTodo from '../CreateTodo/CreateTodo';
import Filter from '../Filter/Filter';
import './TodoCardList.scss';

const todosData = [
  {
    id: 1,
    title: 'Complete online Javascript course',
    completed: true
  },
  {
    id: 2,
    title: 'Jog around the park 3x',
    completed: false
  },
  {
    id: 3,
    title: '10 minutes meditation',
    completed: false
  },
  {
    id: 4,
    title: 'Read for 1 hour',
    completed: false
  },
  {
    id: 5,
    title: 'Pick up groceries',
    completed: false
  },
  {
    id: 6,
    title: 'Complete Todo App on Frontend Mentor',
    completed: false
  },
]

const TodoCardList = () => {
  const [todos, setTodos] = useState(todosData);
  const [incompleteTodos, setIncompleteTodos] = useState(todosData.length);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    let counter = 0;
    todos.map((todo) => {
      if (!todo.completed) counter++;
    })

    setIncompleteTodos(counter);
  }, [todos])

  function handleDelete(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function handleComplete(id) {
    setTodos(todos.map((todo) => {
      return todo.id === id ? {...todo, completed: !todo.completed} : todo;
    }));
  }

  function handleClear() {
    setTodos(todos.map((todo) => {
      return {...todo, completed: false}
    }));
  }

  return (
    <div className="todo-container">
      <CreateTodo todos={todos} setTodos={setTodos} />

      <div className='todo-card-list'>
        {todos.map((todo, index) => {
          if 
            (filter === 'all' || 
            (filter === 'active' && !todo.completed) || 
            (filter === 'completed' && todo.completed)
          )
          return (
            <>
              <TodoCard 
                key={index} 
                todo={todo} 
                handleDelete={handleDelete} 
                handleComplete={handleComplete}
              />
              <hr />
            </>
          )
        })}
        <div className="todo-card-list__footer">
          <span>{incompleteTodos} item{incompleteTodos === 1 ? '' : 's'} left</span>
          <span className='clear' onClick={handleClear}>Clear Completed</span>
        </div>
      </div>

      <Filter setFilter={setFilter} />
    </div>
  )
}

export default TodoCardList
