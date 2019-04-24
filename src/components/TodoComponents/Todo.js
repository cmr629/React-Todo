import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './Todo.css';

export default class Todo extends React.Component {
    constructor(){
        super();

        // Set state with array of list items and current text value for input text
        this.state = {textValue: '',
                      todoListItems: []};

        if (window.localStorage.getItem('listState') !== null)
        this.state = JSON.parse(window.localStorage.getItem('listState'));;
        // Bind method to allow global state
        this.setGlobalState = this.setGlobalState.bind(this);
    }

    setGlobalState(state){
        this.setState(state);
    }

  render() {
    return (
      <div className='todo'>
        <TodoList globalState={this.state} setGlobalState={this.setGlobalState}/>
        <TodoForm globalState={this.state} setGlobalState={this.setGlobalState}/>
      </div>
    );
  }
}