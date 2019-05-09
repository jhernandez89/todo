import React from 'react';
import todo from './components/todo/Todo';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import './App.css';

function App() {
  return (
    <Layout className="App">
      <Route path='/' component={todo} />
    </Layout>
  );
}

export default App;
