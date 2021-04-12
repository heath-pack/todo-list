import React from 'react';
import { Layout } from 'antd';

import { CreateTodo } from './app/todos/createTodo/CreateTodo';
import { TodoList } from './app/todos/todoList/TodoList';
import { NavList } from './app/todos/todosNavList/NavList';
import { CreateList } from './app/todos/createNewList/CreateList';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Layout>
        <Layout.Header></Layout.Header>

        <Layout.Sider>
          <NavList />
        </Layout.Sider>

        <Layout.Content>
          <CreateList />
          <CreateTodo />
          <TodoList />
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;
