import React from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';
function TodoList({ todos, setTodos }) {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          setTodos={setTodos}
          todos={todos}
        />
      ))}
    </div>
  );
}

export default TodoList;
