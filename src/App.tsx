import React, { MouseEventHandler, useState } from 'react';

import { useDispatch } from 'react-redux';

import { addTodo } from './features/todos/actions';

function App() {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  const createTodo = (value: string) => dispatch(addTodo(value));

  const handleSubmit = () => {
    if (inputValue) {
      createTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e?.target?.value)} />
      <button onClick={handleSubmit}>Create Todo</button>
    </div>
  );
}

export default App;
