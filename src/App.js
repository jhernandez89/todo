import React from 'react';
import todo from './components/todo/Todo';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import './App.css';

// While not necessary at the moment because this app doesn't have multiple pages,
// I have included routes for demonstrative purposes
function App() {
  return (
    <Layout className="App">
      <BrowserRouter>
        <Route path='/' component={todo} />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
