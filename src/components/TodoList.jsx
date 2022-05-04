import React, { useCallback } from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';
function TodoList({ todos, deleteTodo, changeTodo }) {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          changeTodo={changeTodo}
        />
      ))}
    </div>
  );
}

export default React.memo(TodoList);
