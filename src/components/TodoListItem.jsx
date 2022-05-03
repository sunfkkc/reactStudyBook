import React, { useCallback } from 'react';
import './TodoListItem.scss';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';

function TodoListItem({ todo, setTodos, todos }) {
  const removeTodo = useCallback((id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  });
  const { text, location, checked, id } = todo;
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">
          {text} - {location}
        </div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline
          onClick={() => {
            removeTodo(id);
          }}
        />
      </div>
    </div>
  );
}

export default TodoListItem;
