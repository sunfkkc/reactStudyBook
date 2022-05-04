import React, { useCallback } from 'react';
import './TodoListItem.scss';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';

function TodoListItem({ todo, changeTodo, deleteTodo }) {
  const { text, location, checked, id } = todo;
  return (
    <div className="TodoListItem">
      <div
        className={cn('checkbox', { checked })}
        onClick={() => {
          changeTodo(id);
        }}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">
          {text} - {location}
        </div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline
          onClick={() => {
            deleteTodo(id);
          }}
        />
      </div>
    </div>
  );
}

export default React.memo(TodoListItem);
