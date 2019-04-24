import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './Todo.css';

export default class Todo extends React.Component {
    constructor(){
        super();

        this.state = {textValue: '',
                      todoListItems: []};

    
        this.setGlobalState = this.setGlobalState.bind(this);

    }

    setGlobalState(state){
        this.setState(state);
    }

  render() {
    return (
      <div className='container'>
        <TodoList globalState={this.state} setGlobalState={this.setGlobalState}/>
        <TodoForm globalState={this.state} setGlobalState={this.setGlobalState}/>
      </div>
    );
  }
}