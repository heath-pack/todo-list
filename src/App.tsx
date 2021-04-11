import React from 'react';
import { Layout } from 'antd';

import { CreateTodo } from './app/todos/createTodo/CreateTodo';
import { TodoList } from './app/todos/todoList/TodoList';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Layout>
        <Layout.Header></Layout.Header>

        <Layout.Sider></Layout.Sider>

        <Layout.Content>
          <CreateTodo />
          <TodoList />
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;
