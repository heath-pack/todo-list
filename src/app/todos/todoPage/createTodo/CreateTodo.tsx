import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { Input, Button } from 'antd';

import { useCreateTodo } from './hooks';

import './CreateTodo.scss';

const PLACEHOLDER = 'Add a new todo item to the list';

export const CreateTodo = () => {
  const { createTodo } = useCreateTodo();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (inputValue) {
      createTodo(inputValue);
      setInputValue('');
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInputValue(event?.target?.value);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log('enter clicked');
      handleSubmit();
    }
  };

  return (
    <div className="input-with-button">
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={PLACEHOLDER}
      />
      <Button onClick={handleSubmit}>Create Todo</Button>
    </div>
  );
};
