import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import './App.css';

const Task = (value) => {
  return (
  <li>{value}</li>
);
}

class App extends React.Component{
  render() {
    const tarefas = ['café', 'exercicios', 'correr', 'tocar instrumento'];
    return (
      <ul>{tarefas.map((e) => Task(e))}</ul>
    )
  }
}

export default App;
