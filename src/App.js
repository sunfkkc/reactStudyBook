import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useReducer,
} from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import { Database } from './model/database';
import { getLocation } from './model/util';
function App() {
  const nextId = useRef(Database.load()[Database.load().length - 1].id + 1);
  const onInsert = useCallback(async (text) => {
    const todo = {
      id: nextId.current,
      text,
      location: await getLocation(),
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
    setIsLoading(false);
    nextId.current += 1;
  }, []);

  const deleteTodo = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const changeTodo = useCallback((id) => {
    dispatch({ type: 'CHANGE', id });
  }, []);
  const [todos, dispatch] = useReducer(todoReducer, Database.load());
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    Database.save(todos);
  }, [todos]);

  function todoReducer(todos, action) {
    switch (action.type) {
      case 'INSERT':
        return todos.concat(action.todo);
      case 'REMOVE':
        return todos.filter((todo) => todo.id !== action.id);
      case 'CHANGE':
        return todos.map((todo) =>
          todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
        );
      default:
        return todos;
    }
  }
  return (
    <TodoTemplate>
      <TodoInsert
        todos={todos}
        onInsert={onInsert}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      {todos.length !== 0 ? (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          changeTodo={changeTodo}
        />
      ) : (
        <>할 일이 없습니다</>
      )}
    </TodoTemplate>
  );
}

export default App;
