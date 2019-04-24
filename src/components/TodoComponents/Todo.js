import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default class Todo extends React.Component {
    constructor(){
        super();

    }
  render() {
    return (
      <div>
        <TodoForm />
      </div>
    );
  }
}