import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';
function TodoInsert({ onInsert, isLoading, setIsLoading }) {
  const [value, setValue] = useState('');
  const onChange = useCallback((evt) => {
    setValue(evt.target.value);
  }, []);

  const onSubmit = useCallback(
    (evt) => {
      onInsert(value);
      setIsLoading(true);
      setValue('');
      evt.preventDefault();
    },
    [value],
  );

  const inputEl = useRef(null);

  useEffect(() => {
    if (isLoading) {
      inputEl.current.readOnly = true;
    } else {
      inputEl.current.readOnly = false;
      inputEl.current.focus();
    }
  }, [isLoading]);
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder={isLoading ? 'Loading...' : '할 일을 입력하세요'}
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
