import React, { Component } from 'react';
import '../styles/App.css';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo List</h1>
        </header>
        <TodoList />
      </div>
    );
  }
}

export default App;
