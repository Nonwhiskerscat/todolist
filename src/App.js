import { useState, useRef, useCallback } from 'react';
import TodoModify from './components/TodolistData/TodoModify';
import TodoInsert from './components/TodolistData/TodoInsert';
import TodoList from './components/TodolistData/TodoList';
import TodoTemplate from './components/TodolistData/TodoTemplate';
import TodoBighead from './components/TodoBighead/TodoBighead';
import TodoTitle from './components/TodolistData/TodoTitle';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Todolist 방문하기',
      checked: true,
      fixed: false
    },

    {
      id: 2,
      text: '루비 언어 예습하기',
      checked: false,
      fixed: false
    },

    {
      id: 3,
      text: '토플 영단어 50개 암기하기',
      checked: false,
      fixed: false
    },

    {
      id: 4,
      text: '1만보 걷기',
      checked: false,
      fixed: false
    },

    {
      id: 5,
      text: '자소서 1000자 이상 작성하기',
      checked: false,
      fixed: false
    }
    
  ]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);

  const nextId = useRef(6);

  const onModal = useCallback(() => {
    if (selectedTodo) {
      setSelectedTodo((selectedTodo) => null);
    }
    setInsertToggle((prev) => !prev);
  }, [selectedTodo]);

  const onModify = (todo) => {
    setSelectedTodo((selectedTodo) => todo);
  };

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };

    setTodos((todos) => todos.concat(todo));
    nextId.current++;
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onUpdate = useCallback(
    (id, text) => {
      onModal();

      setTodos((todos) =>
        todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
      );
    },
    [onModal],
  );

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  return (
    <TodoBighead>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoTitle todos={todos} />

        <TodoList
          todos={todos}
          onToggle={onToggle}
          onRemove={onRemove}
          onModify={onModify}
          onModal={onModal}
        />

        {insertToggle && (
          <TodoModify
            onInsert={onInsert}
            selectedTodo={selectedTodo}
            onModal={onModal}
            onUpdate={onUpdate}
            insertToggle={insertToggle}
          />

        )}
      </TodoTemplate>
    </TodoBighead>

  );
}

export default App;
