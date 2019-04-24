import React from 'react';

export default class TodoForm extends React.Component {
 
    constructor(){
        super();
        this.textValue = '';
    }
    clearButtonClicked(){

    }

    addButtonClicked(){

    }

  render() {
    return (
      <div>
        <input type='text' value={this.value} className='input-box'/>
        <button className='add-btn btn' onClick={this.addButtonClicked}>Add Todo </button>
        <button className='clear-btn btn' onClick={this.clearButtonClicked}>Clear Completed </button>
      </div>
    );
  }
}