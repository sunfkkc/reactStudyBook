import React, { useCallback, useRef, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';
import { Database } from '../model/database';
import { getLocation } from '../model/util';
function TodoInsert({ todos, setTodos }) {
  const [value, setValue] = useState('');
  const onChange = useCallback((evt) => {
    setValue(evt.target.value);
  }, []);
  const nextId = useRef(Database.load().length + 1);
  const onInsert = useCallback(
    async (text) => {
      const todo = {
        id: nextId.current,
        text: text,
        location: await getLocation(),
        checked: false,
      };
      setTodos(todos.concat(todo));
      Database.save(todos.concat(todo));
      inputEl.current.readOnly = false;
      nextId.current += 1;
    },
    [todos],
  );

  const onSubmit = useCallback(
    (evt) => {
      inputEl.current.readOnly = true;
      onInsert(value);
      setValue('');
      evt.preventDefault();
    },
    [value],
  );

  const inputEl = useRef(null);
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
        ref={inputEl}
      />

      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;
