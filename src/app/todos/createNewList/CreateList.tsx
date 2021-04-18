import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Input, Button } from 'antd';

import { useCreateList } from './hooks';

const PLACEHOLDER = 'Add a new todo list';

export const CreateList = () => {
  const { createTodoList } = useCreateList();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (inputValue) {
      createTodoList(inputValue);
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
    <div>
      <Input
        type="text"
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
<<<<<<< HEAD
        placeholder={PLACEHOLDER}
=======
>>>>>>> origin/master
      />
      <Button onClick={handleSubmit}>Create New Todo List</Button>
    </div>
  );
};
