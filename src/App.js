import React, { useCallback, useEffect, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import { Database } from './model/database';
function App() {
  const [todos, setTodos] = useState(Database.load());
  useEffect(() => {
    Database.save(todos);
  }, [todos]);
  return (
    <TodoTemplate>
      <TodoInsert todos={todos} setTodos={setTodos} />
      {todos.length !== 0 ? (
        <TodoList todos={todos} setTodos={setTodos} />
      ) : null}
    </TodoTemplate>
  );
}

export default App;
