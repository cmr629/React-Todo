import React from 'react';

export default class TodoForm extends React.Component {
 
    constructor(props){
        super(props);
        this.state = {textValue: ''};
        this.todoList = [];
    }

    clearButtonClicked(event){
        event.preventDefault();
    }

    addButtonClicked(event){
        event.preventDefault();
        console.log(this.textValue);
       
        this.todoList.push({'task': this.textValue,
                            'id': Date.now(),
                            'completed': false
        });
        this.state.textValue = '';
        this.refs.inputField.value = '';
        
        this.setState(this.todoList);
        debugger;
    }

  render() {
    return (
      <div>
        <input type='text' ref='inputField' className='input-box'/>
        <button className='add-btn btn' onClick={this.addButtonClicked.bind(this)}>Add Todo </button>
        <button className='clear-btn btn' onClick={this.clearButtonClicked.bind(this)}>Clear Completed </button>
      </div>
    );
  }
}