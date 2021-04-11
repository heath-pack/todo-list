import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Button } from 'antd';

import { addTodo } from '../actions';

import './CreateTodo.scss';

export const CreateTodo = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  const createTodo = (value: string) => dispatch(addTodo(value));

  const handleSubmit = () => {
    if (inputValue) {
      createTodo(inputValue);
      setInputValue('');
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInputValue(event?.target?.value);

  return (
    <div className="input-with-button">
      <Input type="text" value={inputValue} onChange={handleInputChange} />
      <Button onClick={handleSubmit}>Create Todo</Button>
    </div>
  );
};
