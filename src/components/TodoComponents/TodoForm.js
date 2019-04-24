import React from 'react';

export default class TodoForm extends React.Component {
 
    // Clear complete items from list
    clearButtonClicked(event){
        event.preventDefault();
        let state = this.props.globalState;

        state.todoListItems = state.todoListItems.filter((item) => {
            return !item.completed;
        });
 
        this.props.setGlobalState(state);
    }

    // Add item to list
    addButtonClicked(event){
        event.preventDefault();
        let state = this.props.globalState;

        state.todoListItems.push({'task': this.refs.inputField.value,
                            'id': Date.now(),
                            'completed': false
        });
  
        this.refs.inputField.value = '';
        this.props.setGlobalState(state);
    }

  render() {
    return (
      <div className='input'>
        <input type='text' ref='inputField' className='input-box'/>
        <button className='add-btn btn' onClick={this.addButtonClicked.bind(this)}>Add Todo </button>
        <button className='clear-btn btn' onClick={this.clearButtonClicked.bind(this)}>Clear Completed </button>
      </div>
    );
  }
}