import React from 'react';

export default class TodoList extends React.Component {
 
    renderList(){
        this.state.todoListItems.forEach((item) =>{
            return (
                <span id={item['id']}> {item['value']} </span>
            );
        });
    }
  render() {
    return (
      <div>
        this.renderList();
      </div>
    );
  }
}