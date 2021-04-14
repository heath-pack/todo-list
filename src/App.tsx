import React from 'react';
import { Layout } from 'antd';

import { TodoPage } from './app/todos/TodoPage';
import { NavList } from './app/todos/todosNavList/NavList';
import { CreateList } from './app/todos/createNewList/CreateList';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Layout.Header>
          <CreateList />
        </Layout.Header>

        <Layout.Sider>
          <NavList />
        </Layout.Sider>

        <Layout.Content>
          <TodoPage />
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;
